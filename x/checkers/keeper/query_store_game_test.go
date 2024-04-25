package keeper_test

import (
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/alice/checkers/testutil/keeper"
	"github.com/alice/checkers/testutil/nullify"
	"github.com/alice/checkers/x/checkers/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestStoreGameQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CheckersKeeper(t)
	msgs := createNStoreGame(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetStoreGameRequest
		response *types.QueryGetStoreGameResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetStoreGameRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetStoreGameResponse{StoreGame: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetStoreGameRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetStoreGameResponse{StoreGame: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetStoreGameRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.StoreGame(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestStoreGameQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CheckersKeeper(t)
	msgs := createNStoreGame(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllStoreGameRequest {
		return &types.QueryAllStoreGameRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.StoreGameAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.StoreGame), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.StoreGame),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.StoreGameAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.StoreGame), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.StoreGame),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.StoreGameAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.StoreGame),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.StoreGameAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

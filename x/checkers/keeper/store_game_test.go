package keeper_test

import (
	"context"
	"strconv"
	"testing"

	keepertest "github.com/alice/checkers/testutil/keeper"
	"github.com/alice/checkers/testutil/nullify"
	"github.com/alice/checkers/x/checkers/keeper"
	"github.com/alice/checkers/x/checkers/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoreGame(keeper keeper.Keeper, ctx context.Context, n int) []types.StoreGame {
	items := make([]types.StoreGame, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoreGame(ctx, items[i])
	}
	return items
}

func TestStoreGameGet(t *testing.T) {
	keeper, ctx := keepertest.CheckersKeeper(t)
	items := createNStoreGame(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoreGame(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoreGameRemove(t *testing.T) {
	keeper, ctx := keepertest.CheckersKeeper(t)
	items := createNStoreGame(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoreGame(ctx,
			item.Index,
		)
		_, found := keeper.GetStoreGame(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoreGameGetAll(t *testing.T) {
	keeper, ctx := keepertest.CheckersKeeper(t)
	items := createNStoreGame(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoreGame(ctx)),
	)
}

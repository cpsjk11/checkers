package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"github.com/alice/checkers/x/checkers/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StoreGameAll(ctx context.Context, req *types.QueryAllStoreGameRequest) (*types.QueryAllStoreGameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storeGames []types.StoreGame

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	storeGameStore := prefix.NewStore(store, types.KeyPrefix(types.StoreGameKeyPrefix))

	pageRes, err := query.Paginate(storeGameStore, req.Pagination, func(key []byte, value []byte) error {
		var storeGame types.StoreGame
		if err := k.cdc.Unmarshal(value, &storeGame); err != nil {
			return err
		}

		storeGames = append(storeGames, storeGame)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoreGameResponse{StoreGame: storeGames, Pagination: pageRes}, nil
}

func (k Keeper) StoreGame(ctx context.Context, req *types.QueryGetStoreGameRequest) (*types.QueryGetStoreGameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetStoreGame(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoreGameResponse{StoreGame: val}, nil
}

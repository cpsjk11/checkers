package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/alice/checkers/x/checkers/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetStoreGame set a specific storeGame in the store from its index
func (k Keeper) SetStoreGame(ctx context.Context, storeGame types.StoreGame) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.StoreGameKeyPrefix))
	b := k.cdc.MustMarshal(&storeGame)
	store.Set(types.StoreGameKey(
		storeGame.Index,
	), b)
}

// GetStoreGame returns a storeGame from its index
func (k Keeper) GetStoreGame(
	ctx context.Context,
	index string,

) (val types.StoreGame, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.StoreGameKeyPrefix))

	b := store.Get(types.StoreGameKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoreGame removes a storeGame from the store
func (k Keeper) RemoveStoreGame(
	ctx context.Context,
	index string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.StoreGameKeyPrefix))
	store.Delete(types.StoreGameKey(
		index,
	))
}

// GetAllStoreGame returns all storeGame
func (k Keeper) GetAllStoreGame(ctx context.Context) (list []types.StoreGame) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.StoreGameKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoreGame
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

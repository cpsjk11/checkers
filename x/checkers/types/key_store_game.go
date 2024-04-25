package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoreGameKeyPrefix is the prefix to retrieve all StoreGame
	StoreGameKeyPrefix = "StoreGame/value/"
)

// StoreGameKey returns the store key to retrieve a StoreGame from the index fields
func StoreGameKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}

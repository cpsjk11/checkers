package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/ignite/checkers/x/checkers/rules"
)

func (storeGame StoreGame) GetBlackAddress() (black sdk.AccAddress, err error) {
	black, errBlack := sdk.AccAddressFromBech32(storeGame.Black)
    return black, sdkerrors.Wrapf(errBlack, ErrInvalidBlack.Error(), storeGame.Black)
}

func (storeGame StoreGame) GetRedAddress() (red sdk.AccAddress, err error) {
	red, errRed := sdk.AccAddressFromBech32(storeGame.Red)
	return sdkerrors.Wrapf(errRed, ErrInvalidRed.Error(), storeGame.Red)
}

func (storeGame StoreGame) ParseGame() (game *rules.Game, err error) {
	board, errBoard := rules.Parse(storeGame.Board)
	if errBoard != nil {
		return nil, sdkerrors.Wrapf(errBoard, ErrGameNotParseable.Error())
	}
	board.Turn = rules.StringPieces[board.Turn].Player
	if board.Turn.Color == "" {
		return nil, sdkerrors.Wrapf(fmt.Errorf("turn: %s", storeGame.Turn))
	}
	return board, nil
}

func (storeGame StoreGame) Validate() (err error) {
	_, err = storeGame.GetBlackAddress()
	if err != nil {
		return err
	}
	_, err = storeGame.GetRedAddress()
	if err != nil {
		return err
	} 
	_, err = storeGame.ParseGame()
	return err
}
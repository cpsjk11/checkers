/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "checkers.checkers";

export interface StoreGame {
  index: string;
  board: string;
  turn: string;
  black: string;
  red: string;
}

function createBaseStoreGame(): StoreGame {
  return { index: "", board: "", turn: "", black: "", red: "" };
}

export const StoreGame = {
  encode(message: StoreGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.board !== "") {
      writer.uint32(18).string(message.board);
    }
    if (message.turn !== "") {
      writer.uint32(26).string(message.turn);
    }
    if (message.black !== "") {
      writer.uint32(34).string(message.black);
    }
    if (message.red !== "") {
      writer.uint32(42).string(message.red);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.board = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.turn = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.black = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.red = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoreGame {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      board: isSet(object.board) ? String(object.board) : "",
      turn: isSet(object.turn) ? String(object.turn) : "",
      black: isSet(object.black) ? String(object.black) : "",
      red: isSet(object.red) ? String(object.red) : "",
    };
  },

  toJSON(message: StoreGame): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.board !== "") {
      obj.board = message.board;
    }
    if (message.turn !== "") {
      obj.turn = message.turn;
    }
    if (message.black !== "") {
      obj.black = message.black;
    }
    if (message.red !== "") {
      obj.red = message.red;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreGame>, I>>(base?: I): StoreGame {
    return StoreGame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StoreGame>, I>>(object: I): StoreGame {
    const message = createBaseStoreGame();
    message.index = object.index ?? "";
    message.board = object.board ?? "";
    message.turn = object.turn ?? "";
    message.black = object.black ?? "";
    message.red = object.red ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

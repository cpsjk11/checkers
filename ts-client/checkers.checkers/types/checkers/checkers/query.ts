/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StoreGame } from "./store_game";
import { SystemInfo } from "./system_info";

export const protobufPackage = "checkers.checkers";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSystemInfoRequest {
}

export interface QueryGetSystemInfoResponse {
  SystemInfo: SystemInfo | undefined;
}

export interface QueryGetStoreGameRequest {
  index: string;
}

export interface QueryGetStoreGameResponse {
  storeGame: StoreGame | undefined;
}

export interface QueryAllStoreGameRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoreGameResponse {
  storeGame: StoreGame[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfoRequest(): QueryGetSystemInfoRequest {
  return {};
}

export const QueryGetSystemInfoRequest = {
  encode(_: QueryGetSystemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetSystemInfoRequest {
    return {};
  },

  toJSON(_: QueryGetSystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfoRequest>, I>>(base?: I): QueryGetSystemInfoRequest {
    return QueryGetSystemInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoRequest>, I>>(_: I): QueryGetSystemInfoRequest {
    const message = createBaseQueryGetSystemInfoRequest();
    return message;
  },
};

function createBaseQueryGetSystemInfoResponse(): QueryGetSystemInfoResponse {
  return { SystemInfo: undefined };
}

export const QueryGetSystemInfoResponse = {
  encode(message: QueryGetSystemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.SystemInfo = SystemInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfoResponse {
    return { SystemInfo: isSet(object.SystemInfo) ? SystemInfo.fromJSON(object.SystemInfo) : undefined };
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    if (message.SystemInfo !== undefined) {
      obj.SystemInfo = SystemInfo.toJSON(message.SystemInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfoResponse>, I>>(base?: I): QueryGetSystemInfoResponse {
    return QueryGetSystemInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoResponse>, I>>(object: I): QueryGetSystemInfoResponse {
    const message = createBaseQueryGetSystemInfoResponse();
    message.SystemInfo = (object.SystemInfo !== undefined && object.SystemInfo !== null)
      ? SystemInfo.fromPartial(object.SystemInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoreGameRequest(): QueryGetStoreGameRequest {
  return { index: "" };
}

export const QueryGetStoreGameRequest = {
  encode(message: QueryGetStoreGameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoreGameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoreGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoreGameRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetStoreGameRequest): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetStoreGameRequest>, I>>(base?: I): QueryGetStoreGameRequest {
    return QueryGetStoreGameRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetStoreGameRequest>, I>>(object: I): QueryGetStoreGameRequest {
    const message = createBaseQueryGetStoreGameRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetStoreGameResponse(): QueryGetStoreGameResponse {
  return { storeGame: undefined };
}

export const QueryGetStoreGameResponse = {
  encode(message: QueryGetStoreGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storeGame !== undefined) {
      StoreGame.encode(message.storeGame, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoreGameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoreGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storeGame = StoreGame.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoreGameResponse {
    return { storeGame: isSet(object.storeGame) ? StoreGame.fromJSON(object.storeGame) : undefined };
  },

  toJSON(message: QueryGetStoreGameResponse): unknown {
    const obj: any = {};
    if (message.storeGame !== undefined) {
      obj.storeGame = StoreGame.toJSON(message.storeGame);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetStoreGameResponse>, I>>(base?: I): QueryGetStoreGameResponse {
    return QueryGetStoreGameResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetStoreGameResponse>, I>>(object: I): QueryGetStoreGameResponse {
    const message = createBaseQueryGetStoreGameResponse();
    message.storeGame = (object.storeGame !== undefined && object.storeGame !== null)
      ? StoreGame.fromPartial(object.storeGame)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoreGameRequest(): QueryAllStoreGameRequest {
  return { pagination: undefined };
}

export const QueryAllStoreGameRequest = {
  encode(message: QueryAllStoreGameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoreGameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoreGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoreGameRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoreGameRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllStoreGameRequest>, I>>(base?: I): QueryAllStoreGameRequest {
    return QueryAllStoreGameRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStoreGameRequest>, I>>(object: I): QueryAllStoreGameRequest {
    const message = createBaseQueryAllStoreGameRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoreGameResponse(): QueryAllStoreGameResponse {
  return { storeGame: [], pagination: undefined };
}

export const QueryAllStoreGameResponse = {
  encode(message: QueryAllStoreGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storeGame) {
      StoreGame.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoreGameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoreGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.storeGame.push(StoreGame.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoreGameResponse {
    return {
      storeGame: Array.isArray(object?.storeGame) ? object.storeGame.map((e: any) => StoreGame.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoreGameResponse): unknown {
    const obj: any = {};
    if (message.storeGame?.length) {
      obj.storeGame = message.storeGame.map((e) => StoreGame.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllStoreGameResponse>, I>>(base?: I): QueryAllStoreGameResponse {
    return QueryAllStoreGameResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStoreGameResponse>, I>>(object: I): QueryAllStoreGameResponse {
    const message = createBaseQueryAllStoreGameResponse();
    message.storeGame = object.storeGame?.map((e) => StoreGame.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SystemInfo by index. */
  SystemInfo(request: QueryGetSystemInfoRequest): Promise<QueryGetSystemInfoResponse>;
  /** Queries a list of StoreGame items. */
  StoreGame(request: QueryGetStoreGameRequest): Promise<QueryGetStoreGameResponse>;
  StoreGameAll(request: QueryAllStoreGameRequest): Promise<QueryAllStoreGameResponse>;
}

export const QueryServiceName = "checkers.checkers.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SystemInfo = this.SystemInfo.bind(this);
    this.StoreGame = this.StoreGame.bind(this);
    this.StoreGameAll = this.StoreGameAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  SystemInfo(request: QueryGetSystemInfoRequest): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SystemInfo", data);
    return promise.then((data) => QueryGetSystemInfoResponse.decode(_m0.Reader.create(data)));
  }

  StoreGame(request: QueryGetStoreGameRequest): Promise<QueryGetStoreGameResponse> {
    const data = QueryGetStoreGameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StoreGame", data);
    return promise.then((data) => QueryGetStoreGameResponse.decode(_m0.Reader.create(data)));
  }

  StoreGameAll(request: QueryAllStoreGameRequest): Promise<QueryAllStoreGameResponse> {
    const data = QueryAllStoreGameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StoreGameAll", data);
    return promise.then((data) => QueryAllStoreGameResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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

import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetSystemInfoRequest } from "./types/checkers/checkers/query";
import { QueryGetSystemInfoResponse } from "./types/checkers/checkers/query";
import { Params } from "./types/checkers/checkers/params";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
import { MsgCreatePost } from "./types/checkers/checkers/tx";
import { QueryParamsResponse } from "./types/checkers/checkers/query";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { SystemInfo } from "./types/checkers/checkers/system_info";
import { MsgCreatePostResponse } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.QueryGetSystemInfoRequest", QueryGetSystemInfoRequest],
    ["/checkers.checkers.QueryGetSystemInfoResponse", QueryGetSystemInfoResponse],
    ["/checkers.checkers.Params", Params],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
    ["/checkers.checkers.MsgCreatePost", MsgCreatePost],
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.SystemInfo", SystemInfo],
    ["/checkers.checkers.MsgCreatePostResponse", MsgCreatePostResponse],
    
];

export { msgTypes }
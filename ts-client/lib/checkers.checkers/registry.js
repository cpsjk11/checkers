import { QueryParamsResponse } from "./types/checkers/checkers/query";
import { Params } from "./types/checkers/checkers/params";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
const msgTypes = [
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    ["/checkers.checkers.Params", Params],
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
];
export { msgTypes };

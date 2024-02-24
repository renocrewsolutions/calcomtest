import { MsgbrokerWhereInput } from "./MsgbrokerWhereInput";
import { MsgbrokerOrderByInput } from "./MsgbrokerOrderByInput";

export type MsgbrokerFindManyArgs = {
  where?: MsgbrokerWhereInput;
  orderBy?: Array<MsgbrokerOrderByInput>;
  skip?: number;
  take?: number;
};

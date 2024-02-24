import { Msgbroker as TMsgbroker } from "../api/msgbroker/Msgbroker";

export const MSGBROKER_TITLE_FIELD = "id";

export const MsgbrokerTitle = (record: TMsgbroker): string => {
  return record.id?.toString() || String(record.id);
};

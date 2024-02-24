import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ApiKeyUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  expiresAt?: Date | null;
  hashedKey?: string;
  lastUsedAt?: Date | null;
  note?: string | null;
  team?: TeamWhereUniqueInput | null;
  userId?: number | null;
};

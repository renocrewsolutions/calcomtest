import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ApiKeyWhereInput = {
  appField?: AppModelWhereUniqueInput;
  createdAt?: DateTimeFilter;
  expiresAt?: DateTimeNullableFilter;
  hashedKey?: StringFilter;
  id?: StringFilter;
  lastUsedAt?: DateTimeNullableFilter;
  note?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
  userId?: IntNullableFilter;
};

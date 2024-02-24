import { OAuthClientWhereUniqueInput } from "../oAuthClient/OAuthClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AccessCodeWhereInput = {
  client?: OAuthClientWhereUniqueInput;
  code?: StringFilter;
  expiresAt?: DateTimeFilter;
  id?: IntFilter;
  team?: TeamWhereUniqueInput;
  userId?: IntNullableFilter;
};

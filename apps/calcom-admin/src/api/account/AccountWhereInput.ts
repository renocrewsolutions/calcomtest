import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accessToken?: StringNullableFilter;
  expiresAt?: IntNullableFilter;
  id?: StringFilter;
  idToken?: StringNullableFilter;
  provider?: StringFilter;
  providerAccountId?: StringFilter;
  refreshToken?: StringNullableFilter;
  scope?: StringNullableFilter;
  sessionState?: StringNullableFilter;
  tokenType?: StringNullableFilter;
  typeField?: StringFilter;
  userId?: IntNullableFilter;
};

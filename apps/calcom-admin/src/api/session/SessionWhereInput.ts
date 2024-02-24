import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SessionWhereInput = {
  expires?: DateTimeFilter;
  id?: StringFilter;
  sessionToken?: StringFilter;
  userId?: IntNullableFilter;
};

import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OutOfOfficeEntryWhereInput = {
  createdAt?: DateTimeFilter;
  end?: DateTimeFilter;
  id?: IntFilter;
  start?: DateTimeFilter;
  toUserId?: IntNullableFilter;
  updatedAt?: DateTimeFilter;
  userId?: IntFilter;
  uuid?: StringFilter;
};

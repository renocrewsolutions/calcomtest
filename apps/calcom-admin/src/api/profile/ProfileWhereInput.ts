import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  createdAt?: DateTimeFilter;
  eventTypes?: EventTypeListRelationFilter;
  id?: IntFilter;
  movedFromUserId?: IntNullableFilter;
  organization?: TeamWhereUniqueInput;
  uid?: StringFilter;
  updatedAt?: DateTimeFilter;
  userId?: IntFilter;
  username?: StringFilter;
};

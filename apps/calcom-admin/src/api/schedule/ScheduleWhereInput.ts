import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScheduleWhereInput = {
  availability?: AvailabilityListRelationFilter;
  eventType?: EventTypeListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  timeZone?: StringNullableFilter;
  userId?: IntFilter;
};

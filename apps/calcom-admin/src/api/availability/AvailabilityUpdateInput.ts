import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type AvailabilityUpdateInput = {
  date?: Date | null;
  days?: number;
  endTime?: Date;
  eventType?: EventTypeWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
  startTime?: Date;
  userId?: number | null;
};

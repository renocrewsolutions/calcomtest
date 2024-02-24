import { AvailabilityUpdateManyWithoutSchedulesInput } from "./AvailabilityUpdateManyWithoutSchedulesInput";
import { EventTypeUpdateManyWithoutSchedulesInput } from "./EventTypeUpdateManyWithoutSchedulesInput";

export type ScheduleUpdateInput = {
  availability?: AvailabilityUpdateManyWithoutSchedulesInput;
  eventType?: EventTypeUpdateManyWithoutSchedulesInput;
  name?: string;
  timeZone?: string | null;
  userId?: number;
};

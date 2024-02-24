import { AvailabilityCreateNestedManyWithoutSchedulesInput } from "./AvailabilityCreateNestedManyWithoutSchedulesInput";
import { EventTypeCreateNestedManyWithoutSchedulesInput } from "./EventTypeCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  availability?: AvailabilityCreateNestedManyWithoutSchedulesInput;
  eventType?: EventTypeCreateNestedManyWithoutSchedulesInput;
  name: string;
  timeZone?: string | null;
  userId: number;
};

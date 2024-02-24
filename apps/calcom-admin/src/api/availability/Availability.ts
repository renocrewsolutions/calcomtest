import { EventType } from "../eventType/EventType";
import { Schedule } from "../schedule/Schedule";

export type Availability = {
  date: Date | null;
  days: number;
  endTime: Date;
  eventType?: EventType | null;
  id: number;
  schedule?: Schedule | null;
  startTime: Date;
  userId: number | null;
};

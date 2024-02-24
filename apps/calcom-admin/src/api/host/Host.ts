import { EventType } from "../eventType/EventType";

export type Host = {
  eventType?: EventType;
  id: number;
  isFixed: boolean;
  priority: number | null;
  userId: number;
};

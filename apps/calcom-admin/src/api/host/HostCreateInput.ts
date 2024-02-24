import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HostCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  isFixed: boolean;
  priority?: number | null;
  userId: number;
};

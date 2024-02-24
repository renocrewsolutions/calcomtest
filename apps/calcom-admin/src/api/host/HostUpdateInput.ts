import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HostUpdateInput = {
  eventType?: EventTypeWhereUniqueInput;
  isFixed?: boolean;
  priority?: number | null;
  userId?: number;
};

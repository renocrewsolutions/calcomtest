import { EventTypeUpdateManyWithoutProfilesInput } from "./EventTypeUpdateManyWithoutProfilesInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProfileUpdateInput = {
  eventTypes?: EventTypeUpdateManyWithoutProfilesInput;
  movedFromUserId?: number | null;
  organization?: TeamWhereUniqueInput;
  uid?: string;
  userId?: number;
  username?: string;
};

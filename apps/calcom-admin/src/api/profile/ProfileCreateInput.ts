import { EventTypeCreateNestedManyWithoutProfilesInput } from "./EventTypeCreateNestedManyWithoutProfilesInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProfileCreateInput = {
  eventTypes?: EventTypeCreateNestedManyWithoutProfilesInput;
  movedFromUserId?: number | null;
  organization: TeamWhereUniqueInput;
  uid: string;
  userId: number;
  username: string;
};

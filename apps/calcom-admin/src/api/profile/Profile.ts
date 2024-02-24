import { EventType } from "../eventType/EventType";
import { Team } from "../team/Team";

export type Profile = {
  createdAt: Date;
  eventTypes?: Array<EventType>;
  id: number;
  movedFromUserId: number | null;
  organization?: Team;
  uid: string;
  updatedAt: Date;
  userId: number;
  username: string;
};

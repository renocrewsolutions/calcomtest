import { Team } from "../team/Team";

export type Membership = {
  accepted: boolean;
  disableImpersonation: boolean;
  id: number;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: Team;
  userId: number;
};

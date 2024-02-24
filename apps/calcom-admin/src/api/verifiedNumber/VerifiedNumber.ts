import { Team } from "../team/Team";

export type VerifiedNumber = {
  id: number;
  phoneNumber: string;
  team?: Team | null;
  userId: number | null;
};

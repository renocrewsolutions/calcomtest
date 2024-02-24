import { AppModel } from "../appModel/AppModel";
import { Team } from "../team/Team";

export type ApiKey = {
  appField?: AppModel | null;
  createdAt: Date;
  expiresAt: Date | null;
  hashedKey: string;
  id: string;
  lastUsedAt: Date | null;
  note: string | null;
  team?: Team | null;
  userId: number | null;
};

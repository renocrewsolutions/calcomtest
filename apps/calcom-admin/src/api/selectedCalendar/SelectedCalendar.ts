import { Credential } from "../credential/Credential";

export type SelectedCalendar = {
  credential?: Credential | null;
  externalId: string;
  id: number;
  integration: string;
  userId: number;
};

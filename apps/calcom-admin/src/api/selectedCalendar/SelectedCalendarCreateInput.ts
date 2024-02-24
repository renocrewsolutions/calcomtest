import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";

export type SelectedCalendarCreateInput = {
  credential?: CredentialWhereUniqueInput | null;
  externalId: string;
  integration: string;
  userId: number;
};

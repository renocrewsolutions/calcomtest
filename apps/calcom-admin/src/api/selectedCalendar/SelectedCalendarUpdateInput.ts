import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";

export type SelectedCalendarUpdateInput = {
  credential?: CredentialWhereUniqueInput | null;
  externalId?: string;
  integration?: string;
  userId?: number;
};

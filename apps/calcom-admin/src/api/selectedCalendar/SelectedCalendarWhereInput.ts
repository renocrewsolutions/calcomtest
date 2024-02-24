import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type SelectedCalendarWhereInput = {
  credential?: CredentialWhereUniqueInput;
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  userId?: IntFilter;
};

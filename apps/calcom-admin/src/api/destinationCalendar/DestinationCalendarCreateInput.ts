import { BookingCreateNestedManyWithoutDestinationCalendarsInput } from "./BookingCreateNestedManyWithoutDestinationCalendarsInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type DestinationCalendarCreateInput = {
  booking?: BookingCreateNestedManyWithoutDestinationCalendarsInput;
  credential?: CredentialWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  externalId: string;
  integration: string;
  primaryEmail?: string | null;
  userId?: number | null;
};

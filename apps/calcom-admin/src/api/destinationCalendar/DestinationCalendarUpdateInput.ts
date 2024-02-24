import { BookingUpdateManyWithoutDestinationCalendarsInput } from "./BookingUpdateManyWithoutDestinationCalendarsInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type DestinationCalendarUpdateInput = {
  booking?: BookingUpdateManyWithoutDestinationCalendarsInput;
  credential?: CredentialWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  externalId?: string;
  integration?: string;
  primaryEmail?: string | null;
  userId?: number | null;
};

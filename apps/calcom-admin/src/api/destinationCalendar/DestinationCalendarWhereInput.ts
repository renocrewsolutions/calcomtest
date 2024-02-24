import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DestinationCalendarWhereInput = {
  booking?: BookingListRelationFilter;
  credential?: CredentialWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  primaryEmail?: StringNullableFilter;
  userId?: IntNullableFilter;
};

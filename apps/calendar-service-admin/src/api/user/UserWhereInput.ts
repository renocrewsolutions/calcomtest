import { AccessCodeListRelationFilter } from "../accessCode/AccessCodeListRelationFilter";
import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OutOfOfficeEntryListRelationFilter } from "../outOfOfficeEntry/OutOfOfficeEntryListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { HostListRelationFilter } from "../host/HostListRelationFilter";
import { ImpersonationListRelationFilter } from "../impersonation/ImpersonationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { UserPasswordWhereUniqueInput } from "../userPassword/UserPasswordWhereUniqueInput";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { AppRoutingFormsFormListRelationFilter } from "../appRoutingFormsForm/AppRoutingFormsFormListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { SelectedCalendarListRelationFilter } from "../selectedCalendar/SelectedCalendarListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";
import { VerifiedNumberListRelationFilter } from "../verifiedNumber/VerifiedNumberListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";
import { WorkflowListRelationFilter } from "../workflow/WorkflowListRelationFilter";

export type UserWhereInput = {
  accessCodes?: AccessCodeListRelationFilter;
  accounts?: AccountListRelationFilter;
  allowDynamicBooking?: BooleanNullableFilter;
  allowSEOIndexing?: BooleanNullableFilter;
  apiKeys?: ApiKeyListRelationFilter;
  appTheme?: StringNullableFilter;
  availability?: AvailabilityListRelationFilter;
  avatar?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  away?: BooleanFilter;
  backupCodes?: StringNullableFilter;
  bio?: StringNullableFilter;
  bookingRedirects?: OutOfOfficeEntryListRelationFilter;
  bookingRedirectsTo?: OutOfOfficeEntryListRelationFilter;
  bookings?: BookingListRelationFilter;
  brandColor?: StringNullableFilter;
  bufferTime?: IntFilter;
  completedOnboarding?: BooleanFilter;
  createdDate?: DateTimeFilter;
  credentials?: CredentialListRelationFilter;
  darkBrandColor?: StringNullableFilter;
  defaultScheduleId?: IntNullableFilter;
  destinationCalendar?: DestinationCalendarWhereUniqueInput;
  disableImpersonation?: BooleanFilter;
  email?: StringFilter;
  emailVerified?: DateTimeNullableFilter;
  endTime?: IntFilter;
  feedback?: FeedbackListRelationFilter;
  hideBranding?: BooleanFilter;
  hosts?: HostListRelationFilter;
  id?: IntFilter;
  identityProvider?: "CAL" | "GOOGLE" | "SAML";
  identityProviderId?: StringNullableFilter;
  impersonatedBy?: ImpersonationListRelationFilter;
  impersonatedUsers?: ImpersonationListRelationFilter;
  invitedTo?: IntNullableFilter;
  locale?: StringNullableFilter;
  locked?: BooleanFilter;
  metadata?: JsonFilter;
  movedToProfile?: ProfileWhereUniqueInput;
  name?: StringNullableFilter;
  organization?: TeamWhereUniqueInput;
  ownedEventTypes?: EventTypeListRelationFilter;
  password?: UserPasswordWhereUniqueInput;
  profiles?: ProfileListRelationFilter;
  receiveMonthlyDigestEmail?: BooleanNullableFilter;
  role?: "USER" | "ADMIN";
  routingForms?: AppRoutingFormsFormListRelationFilter;
  schedules?: ScheduleListRelationFilter;
  selectedCalendars?: SelectedCalendarListRelationFilter;
  sessions?: SessionListRelationFilter;
  startTime?: IntFilter;
  teams?: MembershipListRelationFilter;
  theme?: StringNullableFilter;
  timeFormat?: IntNullableFilter;
  timeZone?: StringFilter;
  trialEndsAt?: DateTimeNullableFilter;
  twoFactorEnabled?: BooleanFilter;
  twoFactorSecret?: StringNullableFilter;
  username?: StringNullableFilter;
  verified?: BooleanNullableFilter;
  verifiedNumbers?: VerifiedNumberListRelationFilter;
  webhooks?: WebhookListRelationFilter;
  weekStart?: StringFilter;
  workflows?: WorkflowListRelationFilter;
};

import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  allowDynamicBooking?: SortOrder;
  allowSEOIndexing?: SortOrder;
  appTheme?: SortOrder;
  avatar?: SortOrder;
  avatarUrl?: SortOrder;
  away?: SortOrder;
  backupCodes?: SortOrder;
  bio?: SortOrder;
  brandColor?: SortOrder;
  bufferTime?: SortOrder;
  completedOnboarding?: SortOrder;
  createdDate?: SortOrder;
  darkBrandColor?: SortOrder;
  defaultScheduleId?: SortOrder;
  destinationCalendarId?: SortOrder;
  disableImpersonation?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  endTime?: SortOrder;
  hideBranding?: SortOrder;
  id?: SortOrder;
  identityProvider?: SortOrder;
  identityProviderId?: SortOrder;
  invitedTo?: SortOrder;
  locale?: SortOrder;
  locked?: SortOrder;
  metadata?: SortOrder;
  movedToProfileId?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  passwordId?: SortOrder;
  receiveMonthlyDigestEmail?: SortOrder;
  role?: SortOrder;
  startTime?: SortOrder;
  theme?: SortOrder;
  timeFormat?: SortOrder;
  timeZone?: SortOrder;
  trialEndsAt?: SortOrder;
  twoFactorEnabled?: SortOrder;
  twoFactorSecret?: SortOrder;
  username?: SortOrder;
  verified?: SortOrder;
  weekStart?: SortOrder;
};

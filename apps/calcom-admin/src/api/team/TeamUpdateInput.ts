import { AccessCodeUpdateManyWithoutTeamsInput } from "./AccessCodeUpdateManyWithoutTeamsInput";
import { ApiKeyUpdateManyWithoutTeamsInput } from "./ApiKeyUpdateManyWithoutTeamsInput";
import { TeamUpdateManyWithoutTeamsInput } from "./TeamUpdateManyWithoutTeamsInput";
import { CredentialUpdateManyWithoutTeamsInput } from "./CredentialUpdateManyWithoutTeamsInput";
import { EventTypeUpdateManyWithoutTeamsInput } from "./EventTypeUpdateManyWithoutTeamsInput";
import { InstantMeetingTokenUpdateManyWithoutTeamsInput } from "./InstantMeetingTokenUpdateManyWithoutTeamsInput";
import { VerificationTokenUpdateManyWithoutTeamsInput } from "./VerificationTokenUpdateManyWithoutTeamsInput";
import { MembershipUpdateManyWithoutTeamsInput } from "./MembershipUpdateManyWithoutTeamsInput";
import { InputJsonValue } from "../../types";
import { ProfileUpdateManyWithoutTeamsInput } from "./ProfileUpdateManyWithoutTeamsInput";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { AppRoutingFormsFormUpdateManyWithoutTeamsInput } from "./AppRoutingFormsFormUpdateManyWithoutTeamsInput";
import { VerifiedNumberUpdateManyWithoutTeamsInput } from "./VerifiedNumberUpdateManyWithoutTeamsInput";
import { WebhookUpdateManyWithoutTeamsInput } from "./WebhookUpdateManyWithoutTeamsInput";
import { WorkflowUpdateManyWithoutTeamsInput } from "./WorkflowUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  accessCodes?: AccessCodeUpdateManyWithoutTeamsInput;
  apiKeys?: ApiKeyUpdateManyWithoutTeamsInput;
  appIconLogo?: string | null;
  appLogo?: string | null;
  bio?: string | null;
  brandColor?: string | null;
  calVideoLogo?: string | null;
  children?: TeamUpdateManyWithoutTeamsInput;
  credentials?: CredentialUpdateManyWithoutTeamsInput;
  darkBrandColor?: string | null;
  eventTypes?: EventTypeUpdateManyWithoutTeamsInput;
  hideBookATeamMember?: boolean;
  hideBranding?: boolean;
  instantMeetingTokens?: InstantMeetingTokenUpdateManyWithoutTeamsInput;
  inviteTokens?: VerificationTokenUpdateManyWithoutTeamsInput;
  isPrivate?: boolean;
  logo?: string | null;
  logoUrl?: string | null;
  members?: MembershipUpdateManyWithoutTeamsInput;
  metadata?: InputJsonValue;
  name?: string;
  orgProfiles?: ProfileUpdateManyWithoutTeamsInput;
  orgUsers?: InputJsonValue;
  parent?: TeamWhereUniqueInput | null;
  pendingPayment?: boolean;
  routingForms?: AppRoutingFormsFormUpdateManyWithoutTeamsInput;
  slug?: string | null;
  theme?: string | null;
  timeFormat?: number | null;
  timeZone?: string;
  verifiedNumbers?: VerifiedNumberUpdateManyWithoutTeamsInput;
  webhooks?: WebhookUpdateManyWithoutTeamsInput;
  weekStart?: string;
  workflows?: WorkflowUpdateManyWithoutTeamsInput;
};

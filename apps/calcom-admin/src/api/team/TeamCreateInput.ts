import { AccessCodeCreateNestedManyWithoutTeamsInput } from "./AccessCodeCreateNestedManyWithoutTeamsInput";
import { ApiKeyCreateNestedManyWithoutTeamsInput } from "./ApiKeyCreateNestedManyWithoutTeamsInput";
import { TeamCreateNestedManyWithoutTeamsInput } from "./TeamCreateNestedManyWithoutTeamsInput";
import { CredentialCreateNestedManyWithoutTeamsInput } from "./CredentialCreateNestedManyWithoutTeamsInput";
import { EventTypeCreateNestedManyWithoutTeamsInput } from "./EventTypeCreateNestedManyWithoutTeamsInput";
import { InstantMeetingTokenCreateNestedManyWithoutTeamsInput } from "./InstantMeetingTokenCreateNestedManyWithoutTeamsInput";
import { VerificationTokenCreateNestedManyWithoutTeamsInput } from "./VerificationTokenCreateNestedManyWithoutTeamsInput";
import { MembershipCreateNestedManyWithoutTeamsInput } from "./MembershipCreateNestedManyWithoutTeamsInput";
import { InputJsonValue } from "../../types";
import { ProfileCreateNestedManyWithoutTeamsInput } from "./ProfileCreateNestedManyWithoutTeamsInput";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { AppRoutingFormsFormCreateNestedManyWithoutTeamsInput } from "./AppRoutingFormsFormCreateNestedManyWithoutTeamsInput";
import { VerifiedNumberCreateNestedManyWithoutTeamsInput } from "./VerifiedNumberCreateNestedManyWithoutTeamsInput";
import { WebhookCreateNestedManyWithoutTeamsInput } from "./WebhookCreateNestedManyWithoutTeamsInput";
import { WorkflowCreateNestedManyWithoutTeamsInput } from "./WorkflowCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  accessCodes?: AccessCodeCreateNestedManyWithoutTeamsInput;
  apiKeys?: ApiKeyCreateNestedManyWithoutTeamsInput;
  appIconLogo?: string | null;
  appLogo?: string | null;
  bio?: string | null;
  brandColor?: string | null;
  calVideoLogo?: string | null;
  children?: TeamCreateNestedManyWithoutTeamsInput;
  credentials?: CredentialCreateNestedManyWithoutTeamsInput;
  darkBrandColor?: string | null;
  eventTypes?: EventTypeCreateNestedManyWithoutTeamsInput;
  hideBookATeamMember: boolean;
  hideBranding: boolean;
  instantMeetingTokens?: InstantMeetingTokenCreateNestedManyWithoutTeamsInput;
  inviteTokens?: VerificationTokenCreateNestedManyWithoutTeamsInput;
  isPrivate: boolean;
  logo?: string | null;
  logoUrl?: string | null;
  members?: MembershipCreateNestedManyWithoutTeamsInput;
  metadata?: InputJsonValue;
  name: string;
  orgProfiles?: ProfileCreateNestedManyWithoutTeamsInput;
  orgUsers?: InputJsonValue;
  parent?: TeamWhereUniqueInput | null;
  pendingPayment: boolean;
  routingForms?: AppRoutingFormsFormCreateNestedManyWithoutTeamsInput;
  slug?: string | null;
  theme?: string | null;
  timeFormat?: number | null;
  timeZone: string;
  verifiedNumbers?: VerifiedNumberCreateNestedManyWithoutTeamsInput;
  webhooks?: WebhookCreateNestedManyWithoutTeamsInput;
  weekStart: string;
  workflows?: WorkflowCreateNestedManyWithoutTeamsInput;
};
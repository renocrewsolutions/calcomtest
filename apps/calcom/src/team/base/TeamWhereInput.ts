/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccessCodeListRelationFilter } from "../../accessCode/base/AccessCodeListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiKeyListRelationFilter } from "../../apiKey/base/ApiKeyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamListRelationFilter } from "./TeamListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../../credential/base/CredentialListRelationFilter";
import { EventTypeListRelationFilter } from "../../eventType/base/EventTypeListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { InstantMeetingTokenListRelationFilter } from "../../instantMeetingToken/base/InstantMeetingTokenListRelationFilter";
import { VerificationTokenListRelationFilter } from "../../verificationToken/base/VerificationTokenListRelationFilter";
import { MembershipListRelationFilter } from "../../membership/base/MembershipListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../../profile/base/ProfileListRelationFilter";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { AppRoutingFormsFormListRelationFilter } from "../../appRoutingFormsForm/base/AppRoutingFormsFormListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VerifiedNumberListRelationFilter } from "../../verifiedNumber/base/VerifiedNumberListRelationFilter";
import { WebhookListRelationFilter } from "../../webhook/base/WebhookListRelationFilter";
import { WorkflowListRelationFilter } from "../../workflow/base/WorkflowListRelationFilter";

@InputType()
class TeamWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccessCodeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AccessCodeListRelationFilter)
  @IsOptional()
  @Field(() => AccessCodeListRelationFilter, {
    nullable: true,
  })
  accessCodes?: AccessCodeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ApiKeyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ApiKeyListRelationFilter)
  @IsOptional()
  @Field(() => ApiKeyListRelationFilter, {
    nullable: true,
  })
  apiKeys?: ApiKeyListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  appIconLogo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  appLogo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  bio?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  brandColor?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  calVideoLogo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TeamListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TeamListRelationFilter)
  @IsOptional()
  @Field(() => TeamListRelationFilter, {
    nullable: true,
  })
  children?: TeamListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => CredentialListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CredentialListRelationFilter)
  @IsOptional()
  @Field(() => CredentialListRelationFilter, {
    nullable: true,
  })
  credentials?: CredentialListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  darkBrandColor?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EventTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventTypeListRelationFilter)
  @IsOptional()
  @Field(() => EventTypeListRelationFilter, {
    nullable: true,
  })
  eventTypes?: EventTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  hideBookATeamMember?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  hideBranding?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => InstantMeetingTokenListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InstantMeetingTokenListRelationFilter)
  @IsOptional()
  @Field(() => InstantMeetingTokenListRelationFilter, {
    nullable: true,
  })
  instantMeetingTokens?: InstantMeetingTokenListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => VerificationTokenListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VerificationTokenListRelationFilter)
  @IsOptional()
  @Field(() => VerificationTokenListRelationFilter, {
    nullable: true,
  })
  inviteTokens?: VerificationTokenListRelationFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isPrivate?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  logo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  logoUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MembershipListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MembershipListRelationFilter)
  @IsOptional()
  @Field(() => MembershipListRelationFilter, {
    nullable: true,
  })
  members?: MembershipListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  metadata?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProfileListRelationFilter)
  @IsOptional()
  @Field(() => ProfileListRelationFilter, {
    nullable: true,
  })
  orgProfiles?: ProfileListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  orgUsers?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => TeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereUniqueInput)
  @IsOptional()
  @Field(() => TeamWhereUniqueInput, {
    nullable: true,
  })
  parent?: TeamWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  pendingPayment?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: () => AppRoutingFormsFormListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AppRoutingFormsFormListRelationFilter)
  @IsOptional()
  @Field(() => AppRoutingFormsFormListRelationFilter, {
    nullable: true,
  })
  routingForms?: AppRoutingFormsFormListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  slug?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  theme?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  timeFormat?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  timeZone?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => VerifiedNumberListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VerifiedNumberListRelationFilter)
  @IsOptional()
  @Field(() => VerifiedNumberListRelationFilter, {
    nullable: true,
  })
  verifiedNumbers?: VerifiedNumberListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WebhookListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WebhookListRelationFilter)
  @IsOptional()
  @Field(() => WebhookListRelationFilter, {
    nullable: true,
  })
  webhooks?: WebhookListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  weekStart?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WorkflowListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkflowListRelationFilter)
  @IsOptional()
  @Field(() => WorkflowListRelationFilter, {
    nullable: true,
  })
  workflows?: WorkflowListRelationFilter;
}

export { TeamWhereInput as TeamWhereInput };

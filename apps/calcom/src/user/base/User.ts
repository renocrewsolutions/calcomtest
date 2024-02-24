/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccessCode } from "../../accessCode/base/AccessCode";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  IsInt,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Account } from "../../account/base/Account";
import { ApiKey } from "../../apiKey/base/ApiKey";
import { Availability } from "../../availability/base/Availability";
import { OutOfOfficeEntry } from "../../outOfOfficeEntry/base/OutOfOfficeEntry";
import { Booking } from "../../booking/base/Booking";
import { Credential } from "../../credential/base/Credential";
import { DestinationCalendar } from "../../destinationCalendar/base/DestinationCalendar";
import { Feedback } from "../../feedback/base/Feedback";
import { Host } from "../../host/base/Host";
import { EnumUserIdentityProvider } from "./EnumUserIdentityProvider";
import { Impersonation } from "../../impersonation/base/Impersonation";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Profile } from "../../profile/base/Profile";
import { Team } from "../../team/base/Team";
import { EventType } from "../../eventType/base/EventType";
import { UserPassword } from "../../userPassword/base/UserPassword";
import { EnumUserRole } from "./EnumUserRole";
import { AppRoutingFormsForm } from "../../appRoutingFormsForm/base/AppRoutingFormsForm";
import { Schedule } from "../../schedule/base/Schedule";
import { SelectedCalendar } from "../../selectedCalendar/base/SelectedCalendar";
import { Session } from "../../session/base/Session";
import { Membership } from "../../membership/base/Membership";
import { VerifiedNumber } from "../../verifiedNumber/base/VerifiedNumber";
import { Webhook } from "../../webhook/base/Webhook";
import { Workflow } from "../../workflow/base/Workflow";

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [AccessCode],
  })
  @ValidateNested()
  @Type(() => AccessCode)
  @IsOptional()
  accessCodes?: Array<AccessCode>;

  @ApiProperty({
    required: false,
    type: () => [Account],
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  accounts?: Array<Account>;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  allowDynamicBooking!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  allowSEOIndexing!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [ApiKey],
  })
  @ValidateNested()
  @Type(() => ApiKey)
  @IsOptional()
  apiKeys?: Array<ApiKey>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  appTheme!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Availability],
  })
  @ValidateNested()
  @Type(() => Availability)
  @IsOptional()
  availability?: Array<Availability>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatar!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatarUrl!: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  away!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  backupCodes!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio!: string | null;

  @ApiProperty({
    required: false,
    type: () => [OutOfOfficeEntry],
  })
  @ValidateNested()
  @Type(() => OutOfOfficeEntry)
  @IsOptional()
  bookingRedirects?: Array<OutOfOfficeEntry>;

  @ApiProperty({
    required: false,
    type: () => [OutOfOfficeEntry],
  })
  @ValidateNested()
  @Type(() => OutOfOfficeEntry)
  @IsOptional()
  bookingRedirectsTo?: Array<OutOfOfficeEntry>;

  @ApiProperty({
    required: false,
    type: () => [Booking],
  })
  @ValidateNested()
  @Type(() => Booking)
  @IsOptional()
  bookings?: Array<Booking>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  brandColor!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  bufferTime!: number;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  completedOnboarding!: boolean;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdDate!: Date;

  @ApiProperty({
    required: false,
    type: () => [Credential],
  })
  @ValidateNested()
  @Type(() => Credential)
  @IsOptional()
  credentials?: Array<Credential>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  darkBrandColor!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  defaultScheduleId!: number | null;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendar,
  })
  @ValidateNested()
  @Type(() => DestinationCalendar)
  @IsOptional()
  destinationCalendar?: DestinationCalendar | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  disableImpersonation!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  emailVerified!: Date | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  endTime!: number;

  @ApiProperty({
    required: false,
    type: () => [Feedback],
  })
  @ValidateNested()
  @Type(() => Feedback)
  @IsOptional()
  feedback?: Array<Feedback>;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hideBranding!: boolean;

  @ApiProperty({
    required: false,
    type: () => [Host],
  })
  @ValidateNested()
  @Type(() => Host)
  @IsOptional()
  hosts?: Array<Host>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    enum: EnumUserIdentityProvider,
  })
  @IsEnum(EnumUserIdentityProvider)
  @Field(() => EnumUserIdentityProvider, {
    nullable: true,
  })
  identityProvider?: "CAL" | "GOOGLE" | "SAML";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identityProviderId!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Impersonation],
  })
  @ValidateNested()
  @Type(() => Impersonation)
  @IsOptional()
  impersonatedBy?: Array<Impersonation>;

  @ApiProperty({
    required: false,
    type: () => [Impersonation],
  })
  @ValidateNested()
  @Type(() => Impersonation)
  @IsOptional()
  impersonatedUsers?: Array<Impersonation>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  invitedTo!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  locale!: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  locked!: boolean;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  metadata!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => Profile,
  })
  @ValidateNested()
  @Type(() => Profile)
  @IsOptional()
  movedToProfile?: Profile | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => Team,
  })
  @ValidateNested()
  @Type(() => Team)
  @IsOptional()
  organization?: Team | null;

  @ApiProperty({
    required: false,
    type: () => [EventType],
  })
  @ValidateNested()
  @Type(() => EventType)
  @IsOptional()
  ownedEventTypes?: Array<EventType>;

  @ApiProperty({
    required: false,
    type: () => UserPassword,
  })
  @ValidateNested()
  @Type(() => UserPassword)
  @IsOptional()
  password?: UserPassword | null;

  @ApiProperty({
    required: false,
    type: () => [Profile],
  })
  @ValidateNested()
  @Type(() => Profile)
  @IsOptional()
  profiles?: Array<Profile>;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  receiveMonthlyDigestEmail!: boolean | null;

  @ApiProperty({
    required: true,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "USER" | "ADMIN";

  @ApiProperty({
    required: false,
    type: () => [AppRoutingFormsForm],
  })
  @ValidateNested()
  @Type(() => AppRoutingFormsForm)
  @IsOptional()
  routingForms?: Array<AppRoutingFormsForm>;

  @ApiProperty({
    required: false,
    type: () => [Schedule],
  })
  @ValidateNested()
  @Type(() => Schedule)
  @IsOptional()
  schedules?: Array<Schedule>;

  @ApiProperty({
    required: false,
    type: () => [SelectedCalendar],
  })
  @ValidateNested()
  @Type(() => SelectedCalendar)
  @IsOptional()
  selectedCalendars?: Array<SelectedCalendar>;

  @ApiProperty({
    required: false,
    type: () => [Session],
  })
  @ValidateNested()
  @Type(() => Session)
  @IsOptional()
  sessions?: Array<Session>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  startTime!: number;

  @ApiProperty({
    required: false,
    type: () => [Membership],
  })
  @ValidateNested()
  @Type(() => Membership)
  @IsOptional()
  teams?: Array<Membership>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  theme!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeFormat!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  timeZone!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  trialEndsAt!: Date | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  twoFactorEnabled!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  twoFactorSecret!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  verified!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [VerifiedNumber],
  })
  @ValidateNested()
  @Type(() => VerifiedNumber)
  @IsOptional()
  verifiedNumbers?: Array<VerifiedNumber>;

  @ApiProperty({
    required: false,
    type: () => [Webhook],
  })
  @ValidateNested()
  @Type(() => Webhook)
  @IsOptional()
  webhooks?: Array<Webhook>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  weekStart!: string;

  @ApiProperty({
    required: false,
    type: () => [Workflow],
  })
  @ValidateNested()
  @Type(() => Workflow)
  @IsOptional()
  workflows?: Array<Workflow>;
}

export { User as User };

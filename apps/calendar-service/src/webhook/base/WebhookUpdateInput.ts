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
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsString,
} from "class-validator";
import { AppModelWhereUniqueInput } from "../../appModel/base/AppModelWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumWebhookEventTriggers } from "./EnumWebhookEventTriggers";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WebhookUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active?: boolean;

  @ApiProperty({
    required: false,
    type: () => AppModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppModelWhereUniqueInput)
  @IsOptional()
  @Field(() => AppModelWhereUniqueInput, {
    nullable: true,
  })
  appField?: AppModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumWebhookEventTriggers,
    isArray: true,
  })
  @IsEnum(EnumWebhookEventTriggers, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumWebhookEventTriggers], {
    nullable: true,
  })
  eventTriggers?: Array<
    | "BOOKING_CREATED"
    | "BOOKING_PAYMENT_INITIATED"
    | "BOOKING_PAID"
    | "BOOKING_RESCHEDULED"
    | "BOOKING_REQUESTED"
    | "BOOKING_CANCELLED"
    | "BOOKING_REJECTED"
    | "FORM_SUBMITTED"
    | "MEETING_ENDED"
    | "MEETING_STARTED"
    | "RECORDING_READY"
    | "INSTANT_MEETING"
  >;

  @ApiProperty({
    required: false,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => EventTypeWhereUniqueInput, {
    nullable: true,
  })
  eventType?: EventTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  payloadTemplate?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secret?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subscriberUrl?: string;

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
  team?: TeamWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { WebhookUpdateInput as WebhookUpdateInput };

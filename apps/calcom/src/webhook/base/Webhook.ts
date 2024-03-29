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
import {
  IsBoolean,
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  IsInt,
} from "class-validator";
import { AppModel } from "../../appModel/base/AppModel";
import { Type } from "class-transformer";
import { EnumWebhookEventTriggers } from "./EnumWebhookEventTriggers";
import { EventType } from "../../eventType/base/EventType";
import { Team } from "../../team/base/Team";

@ObjectType()
class Webhook {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  active!: boolean;

  @ApiProperty({
    required: false,
    type: () => AppModel,
  })
  @ValidateNested()
  @Type(() => AppModel)
  @IsOptional()
  appField?: AppModel | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
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
    type: () => EventType,
  })
  @ValidateNested()
  @Type(() => EventType)
  @IsOptional()
  eventType?: EventType | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  payloadTemplate!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secret!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  subscriberUrl!: string;

  @ApiProperty({
    required: false,
    type: () => Team,
  })
  @ValidateNested()
  @Type(() => Team)
  @IsOptional()
  team?: Team | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  userId!: number | null;
}

export { Webhook as Webhook };

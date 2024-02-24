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
import { AppModel } from "../../appModel/base/AppModel";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { CalendarCache } from "../../calendarCache/base/CalendarCache";
import { DestinationCalendar } from "../../destinationCalendar/base/DestinationCalendar";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { SelectedCalendar } from "../../selectedCalendar/base/SelectedCalendar";
import { Team } from "../../team/base/Team";
import { User } from "../../user/base/User";

@ObjectType()
class Credential {
  @ApiProperty({
    required: false,
    type: () => AppModel,
  })
  @ValidateNested()
  @Type(() => AppModel)
  @IsOptional()
  appField?: AppModel | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  billingCycleStart!: number | null;

  @ApiProperty({
    required: false,
    type: () => [CalendarCache],
  })
  @ValidateNested()
  @Type(() => CalendarCache)
  @IsOptional()
  calendarCache?: Array<CalendarCache>;

  @ApiProperty({
    required: false,
    type: () => [DestinationCalendar],
  })
  @ValidateNested()
  @Type(() => DestinationCalendar)
  @IsOptional()
  destinationCalendars?: Array<DestinationCalendar>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  invalid!: boolean | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  key!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymentStatus!: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subscriptionId!: string | null;

  @ApiProperty({
    required: false,
    type: () => Team,
  })
  @ValidateNested()
  @Type(() => Team)
  @IsOptional()
  team?: Team | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  typeField!: string;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Credential as Credential };

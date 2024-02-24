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
import { BookingListRelationFilter } from "../../booking/base/BookingListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CredentialWhereUniqueInput } from "../../credential/base/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class DestinationCalendarWhereInput {
  @ApiProperty({
    required: false,
    type: () => BookingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BookingListRelationFilter)
  @IsOptional()
  @Field(() => BookingListRelationFilter, {
    nullable: true,
  })
  booking?: BookingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CredentialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CredentialWhereUniqueInput)
  @IsOptional()
  @Field(() => CredentialWhereUniqueInput, {
    nullable: true,
  })
  credential?: CredentialWhereUniqueInput;

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
  eventType?: EventTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  externalId?: StringFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  integration?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  primaryEmail?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  userId?: IntNullableFilter;
}

export { DestinationCalendarWhereInput as DestinationCalendarWhereInput };

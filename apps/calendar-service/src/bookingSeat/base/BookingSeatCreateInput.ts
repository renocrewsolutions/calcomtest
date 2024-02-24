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
import { AttendeeWhereUniqueInput } from "../../attendee/base/AttendeeWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class BookingSeatCreateInput {
  @ApiProperty({
    required: true,
    type: () => AttendeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttendeeWhereUniqueInput)
  @Field(() => AttendeeWhereUniqueInput)
  attendee!: AttendeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BookingWhereUniqueInput)
  @Field(() => BookingWhereUniqueInput)
  booking!: BookingWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  data?: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  referenceUid!: string;
}

export { BookingSeatCreateInput as BookingSeatCreateInput };

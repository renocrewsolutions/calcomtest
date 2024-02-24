/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendeeWhereUniqueInput } from "./AttendeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AttendeeUpdateInput } from "./AttendeeUpdateInput";

@ArgsType()
class UpdateAttendeeArgs {
  @ApiProperty({
    required: true,
    type: () => AttendeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttendeeWhereUniqueInput)
  @Field(() => AttendeeWhereUniqueInput, { nullable: false })
  where!: AttendeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AttendeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => AttendeeUpdateInput)
  @Field(() => AttendeeUpdateInput, { nullable: false })
  data!: AttendeeUpdateInput;
}

export { UpdateAttendeeArgs as UpdateAttendeeArgs };
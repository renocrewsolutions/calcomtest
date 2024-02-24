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
import { User1CreateInput } from "./User1CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateUser1Args {
  @ApiProperty({
    required: true,
    type: () => User1CreateInput,
  })
  @ValidateNested()
  @Type(() => User1CreateInput)
  @Field(() => User1CreateInput, { nullable: false })
  data!: User1CreateInput;
}

export { CreateUser1Args as CreateUser1Args };

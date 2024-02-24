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
import { WorkflowWhereInput } from "./WorkflowWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkflowListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkflowWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereInput)
  @IsOptional()
  @Field(() => WorkflowWhereInput, {
    nullable: true,
  })
  every?: WorkflowWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereInput)
  @IsOptional()
  @Field(() => WorkflowWhereInput, {
    nullable: true,
  })
  some?: WorkflowWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereInput)
  @IsOptional()
  @Field(() => WorkflowWhereInput, {
    nullable: true,
  })
  none?: WorkflowWhereInput;
}
export { WorkflowListRelationFilter as WorkflowListRelationFilter };
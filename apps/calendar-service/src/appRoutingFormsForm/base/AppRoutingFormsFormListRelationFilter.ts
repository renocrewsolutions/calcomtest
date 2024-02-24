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
import { AppRoutingFormsFormWhereInput } from "./AppRoutingFormsFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AppRoutingFormsFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AppRoutingFormsFormWhereInput,
  })
  @ValidateNested()
  @Type(() => AppRoutingFormsFormWhereInput)
  @IsOptional()
  @Field(() => AppRoutingFormsFormWhereInput, {
    nullable: true,
  })
  every?: AppRoutingFormsFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => AppRoutingFormsFormWhereInput,
  })
  @ValidateNested()
  @Type(() => AppRoutingFormsFormWhereInput)
  @IsOptional()
  @Field(() => AppRoutingFormsFormWhereInput, {
    nullable: true,
  })
  some?: AppRoutingFormsFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => AppRoutingFormsFormWhereInput,
  })
  @ValidateNested()
  @Type(() => AppRoutingFormsFormWhereInput)
  @IsOptional()
  @Field(() => AppRoutingFormsFormWhereInput, {
    nullable: true,
  })
  none?: AppRoutingFormsFormWhereInput;
}
export { AppRoutingFormsFormListRelationFilter as AppRoutingFormsFormListRelationFilter };
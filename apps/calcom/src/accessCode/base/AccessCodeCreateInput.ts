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
import { OAuthClientWhereUniqueInput } from "../../oAuthClient/base/OAuthClientWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAccessCodeScopes } from "./EnumAccessCodeScopes";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";

@InputType()
class AccessCodeCreateInput {
  @ApiProperty({
    required: false,
    type: () => OAuthClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OAuthClientWhereUniqueInput)
  @IsOptional()
  @Field(() => OAuthClientWhereUniqueInput, {
    nullable: true,
  })
  client?: OAuthClientWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  expiresAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumAccessCodeScopes,
    isArray: true,
  })
  @IsEnum(EnumAccessCodeScopes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumAccessCodeScopes], {
    nullable: true,
  })
  scopes?: Array<"READ_BOOKING" | "READ_PROFILE">;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  userId?: number | null;
}

export { AccessCodeCreateInput as AccessCodeCreateInput };

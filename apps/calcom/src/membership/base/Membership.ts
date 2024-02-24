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
import { IsBoolean, IsInt, IsEnum, ValidateNested } from "class-validator";
import { EnumMembershipRole } from "./EnumMembershipRole";
import { Team } from "../../team/base/Team";
import { Type } from "class-transformer";

@ObjectType()
class Membership {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  accepted!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  disableImpersonation!: boolean;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    enum: EnumMembershipRole,
  })
  @IsEnum(EnumMembershipRole)
  @Field(() => EnumMembershipRole, {
    nullable: true,
  })
  role?: "MEMBER" | "ADMIN" | "OWNER";

  @ApiProperty({
    required: true,
    type: () => Team,
  })
  @ValidateNested()
  @Type(() => Team)
  team?: Team;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  userId!: number;
}

export { Membership as Membership };

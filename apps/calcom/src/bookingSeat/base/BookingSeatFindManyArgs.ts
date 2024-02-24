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
import { BookingSeatWhereInput } from "./BookingSeatWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BookingSeatOrderByInput } from "./BookingSeatOrderByInput";

@ArgsType()
class BookingSeatFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookingSeatWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BookingSeatWhereInput, { nullable: true })
  @Type(() => BookingSeatWhereInput)
  where?: BookingSeatWhereInput;

  @ApiProperty({
    required: false,
    type: [BookingSeatOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BookingSeatOrderByInput], { nullable: true })
  @Type(() => BookingSeatOrderByInput)
  orderBy?: Array<BookingSeatOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BookingSeatFindManyArgs as BookingSeatFindManyArgs };
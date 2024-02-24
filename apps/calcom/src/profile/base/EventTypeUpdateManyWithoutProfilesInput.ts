/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EventTypeUpdateManyWithoutProfilesInput {
  @Field(() => [EventTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventTypeWhereUniqueInput],
  })
  connect?: Array<EventTypeWhereUniqueInput>;

  @Field(() => [EventTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventTypeWhereUniqueInput],
  })
  disconnect?: Array<EventTypeWhereUniqueInput>;

  @Field(() => [EventTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventTypeWhereUniqueInput],
  })
  set?: Array<EventTypeWhereUniqueInput>;
}

export { EventTypeUpdateManyWithoutProfilesInput as EventTypeUpdateManyWithoutProfilesInput };

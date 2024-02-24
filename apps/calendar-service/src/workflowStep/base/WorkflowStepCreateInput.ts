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
import { EnumWorkflowStepAction } from "./EnumWorkflowStepAction";
import {
  IsEnum,
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  ValidateNested,
} from "class-validator";
import { EnumWorkflowStepTemplate } from "./EnumWorkflowStepTemplate";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";
import { Type } from "class-transformer";
import { WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput } from "./WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput";

@InputType()
class WorkflowStepCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumWorkflowStepAction,
  })
  @IsEnum(EnumWorkflowStepAction)
  @Field(() => EnumWorkflowStepAction)
  action!:
    | "EMAIL_HOST"
    | "EMAIL_ATTENDEE"
    | "SMS_ATTENDEE"
    | "SMS_NUMBER"
    | "EMAIL_ADDRESS"
    | "WHATSAPP_ATTENDEE"
    | "WHATSAPP_NUMBER";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emailSubject?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  includeCalendarEvent!: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  numberRequired?: boolean | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  numberVerificationPending!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reminderBody?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sender?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sendTo?: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  stepNumber!: number;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowStepTemplate,
  })
  @IsEnum(EnumWorkflowStepTemplate)
  @Field(() => EnumWorkflowStepTemplate)
  template!: "REMINDER" | "CUSTOM" | "CANCELLED" | "RESCHEDULED" | "COMPLETED";

  @ApiProperty({
    required: true,
    type: () => WorkflowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereUniqueInput)
  @Field(() => WorkflowWhereUniqueInput)
  workflow!: WorkflowWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput,
  })
  @ValidateNested()
  @Type(() => WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput)
  @IsOptional()
  @Field(() => WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput, {
    nullable: true,
  })
  workflowReminders?: WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput;
}

export { WorkflowStepCreateInput as WorkflowStepCreateInput };

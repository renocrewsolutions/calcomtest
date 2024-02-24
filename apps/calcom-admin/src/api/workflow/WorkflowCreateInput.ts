import { WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput";
import { WorkflowStepCreateNestedManyWithoutWorkflowsInput } from "./WorkflowStepCreateNestedManyWithoutWorkflowsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type WorkflowCreateInput = {
  activeOn?: WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput;
  name: string;
  position: number;
  steps?: WorkflowStepCreateNestedManyWithoutWorkflowsInput;
  team?: TeamWhereUniqueInput | null;
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger:
    | "BEFORE_EVENT"
    | "EVENT_CANCELLED"
    | "NEW_EVENT"
    | "AFTER_EVENT"
    | "RESCHEDULE_EVENT";
  userId?: number | null;
};

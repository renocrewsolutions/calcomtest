import { InputJsonValue } from "../../types";
import { AppRoutingFormsFormResponseUpdateManyWithoutAppRoutingFormsFormsInput } from "./AppRoutingFormsFormResponseUpdateManyWithoutAppRoutingFormsFormsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type AppRoutingFormsFormUpdateInput = {
  description?: string | null;
  disabled?: boolean;
  fields?: InputJsonValue;
  name?: string;
  position?: number;
  responses?: AppRoutingFormsFormResponseUpdateManyWithoutAppRoutingFormsFormsInput;
  routes?: InputJsonValue;
  settings?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  userId?: number;
};

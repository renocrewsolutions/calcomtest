import { InputJsonValue } from "../../types";
import { AppRoutingFormsFormResponseCreateNestedManyWithoutAppRoutingFormsFormsInput } from "./AppRoutingFormsFormResponseCreateNestedManyWithoutAppRoutingFormsFormsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type AppRoutingFormsFormCreateInput = {
  description?: string | null;
  disabled: boolean;
  fields?: InputJsonValue;
  name: string;
  position: number;
  responses?: AppRoutingFormsFormResponseCreateNestedManyWithoutAppRoutingFormsFormsInput;
  routes?: InputJsonValue;
  settings?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  userId: number;
};

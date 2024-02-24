import { JsonValue } from "type-fest";
import { AppRoutingFormsFormResponse } from "../appRoutingFormsFormResponse/AppRoutingFormsFormResponse";
import { Team } from "../team/Team";

export type AppRoutingFormsForm = {
  createdAt: Date;
  description: string | null;
  disabled: boolean;
  fields: JsonValue;
  id: string;
  name: string;
  position: number;
  responses?: Array<AppRoutingFormsFormResponse>;
  routes: JsonValue;
  settings: JsonValue;
  team?: Team | null;
  updatedAt: Date;
  userId: number;
};

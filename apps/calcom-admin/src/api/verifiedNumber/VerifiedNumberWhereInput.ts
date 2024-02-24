import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VerifiedNumberWhereInput = {
  id?: IntFilter;
  phoneNumber?: StringFilter;
  team?: TeamWhereUniqueInput;
  userId?: IntNullableFilter;
};

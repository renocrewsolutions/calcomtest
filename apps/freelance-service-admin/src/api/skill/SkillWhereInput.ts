import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SkillWhereInput = {
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};

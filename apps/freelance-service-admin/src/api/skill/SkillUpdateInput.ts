import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SkillUpdateInput = {
  description?: string | null;
  name?: string;
  user?: UserWhereUniqueInput | null;
};

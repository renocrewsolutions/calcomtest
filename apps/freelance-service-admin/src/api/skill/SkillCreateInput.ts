import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SkillCreateInput = {
  description?: string | null;
  name: string;
  user?: UserWhereUniqueInput | null;
};

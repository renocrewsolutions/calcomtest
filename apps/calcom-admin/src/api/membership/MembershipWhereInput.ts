import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type MembershipWhereInput = {
  accepted?: BooleanFilter;
  disableImpersonation?: BooleanFilter;
  id?: IntFilter;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: TeamWhereUniqueInput;
  userId?: IntFilter;
};

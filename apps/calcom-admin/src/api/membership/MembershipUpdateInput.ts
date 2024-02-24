import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type MembershipUpdateInput = {
  accepted?: boolean;
  disableImpersonation?: boolean;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: TeamWhereUniqueInput;
  userId?: number;
};

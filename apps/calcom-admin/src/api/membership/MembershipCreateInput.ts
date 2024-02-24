import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type MembershipCreateInput = {
  accepted: boolean;
  disableImpersonation: boolean;
  role: "MEMBER" | "ADMIN" | "OWNER";
  team: TeamWhereUniqueInput;
  userId: number;
};

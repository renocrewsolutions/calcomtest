import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipCreateInput = {
  accepted: boolean;
  disableImpersonation: boolean;
  role: "MEMBER" | "ADMIN" | "OWNER";
  team: TeamWhereUniqueInput;
  user: UserWhereUniqueInput;
};

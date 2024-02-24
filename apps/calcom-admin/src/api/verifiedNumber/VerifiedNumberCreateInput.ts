import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type VerifiedNumberCreateInput = {
  phoneNumber: string;
  team?: TeamWhereUniqueInput | null;
  userId?: number | null;
};

import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type VerifiedNumberUpdateInput = {
  phoneNumber?: string;
  team?: TeamWhereUniqueInput | null;
  userId?: number | null;
};

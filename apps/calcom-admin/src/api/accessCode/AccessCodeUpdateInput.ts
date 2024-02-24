import { OAuthClientWhereUniqueInput } from "../oAuthClient/OAuthClientWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type AccessCodeUpdateInput = {
  client?: OAuthClientWhereUniqueInput | null;
  code?: string;
  expiresAt?: Date;
  scopes?: Array<"READ_BOOKING" | "READ_PROFILE">;
  team?: TeamWhereUniqueInput | null;
  userId?: number | null;
};

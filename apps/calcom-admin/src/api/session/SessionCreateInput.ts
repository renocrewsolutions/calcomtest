export type SessionCreateInput = {
  expires: Date;
  sessionToken: string;
  userId?: number | null;
};

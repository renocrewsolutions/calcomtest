export type SessionUpdateInput = {
  expires?: Date;
  sessionToken?: string;
  userId?: number | null;
};

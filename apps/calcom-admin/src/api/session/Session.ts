export type Session = {
  expires: Date;
  id: string;
  sessionToken: string;
  userId: number | null;
};

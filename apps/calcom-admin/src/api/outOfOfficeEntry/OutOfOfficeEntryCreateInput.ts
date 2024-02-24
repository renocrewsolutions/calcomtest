export type OutOfOfficeEntryCreateInput = {
  end: Date;
  start: Date;
  toUserId?: number | null;
  userId: number;
  uuid: string;
};

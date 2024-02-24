export type OutOfOfficeEntry = {
  createdAt: Date;
  end: Date;
  id: number;
  start: Date;
  toUserId: number | null;
  updatedAt: Date;
  userId: number;
  uuid: string;
};

import { BidUpdateManyWithoutUsersInput } from "./BidUpdateManyWithoutUsersInput";
import { JobUpdateManyWithoutUsersInput } from "./JobUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { SkillUpdateManyWithoutUsersInput } from "./SkillUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bids?: BidUpdateManyWithoutUsersInput;
  bio?: string | null;
  email?: string;
  jobs?: JobUpdateManyWithoutUsersInput;
  location?: string | null;
  password?: string;
  profileImage?: string | null;
  receivedMessages?: MessageUpdateManyWithoutUsersInput;
  reviewsAsClient?: ReviewUpdateManyWithoutUsersInput;
  reviewsAsFreelancer?: ReviewUpdateManyWithoutUsersInput;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: MessageUpdateManyWithoutUsersInput;
  skills?: SkillUpdateManyWithoutUsersInput;
  transactionsAsClient?: TransactionUpdateManyWithoutUsersInput;
  transactionsAsFreelancer?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};

import { BidCreateNestedManyWithoutUsersInput } from "./BidCreateNestedManyWithoutUsersInput";
import { JobCreateNestedManyWithoutUsersInput } from "./JobCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { SkillCreateNestedManyWithoutUsersInput } from "./SkillCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bids?: BidCreateNestedManyWithoutUsersInput;
  bio?: string | null;
  email: string;
  jobs?: JobCreateNestedManyWithoutUsersInput;
  location?: string | null;
  password: string;
  profileImage?: string | null;
  receivedMessages?: MessageCreateNestedManyWithoutUsersInput;
  reviewsAsClient?: ReviewCreateNestedManyWithoutUsersInput;
  reviewsAsFreelancer?: ReviewCreateNestedManyWithoutUsersInput;
  role: "CLIENT" | "FREELANCER";
  sentMessages?: MessageCreateNestedManyWithoutUsersInput;
  skills?: SkillCreateNestedManyWithoutUsersInput;
  transactionsAsClient?: TransactionCreateNestedManyWithoutUsersInput;
  transactionsAsFreelancer?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};

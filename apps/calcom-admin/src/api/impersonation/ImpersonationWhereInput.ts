import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";

export type ImpersonationWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  impersonatedById?: IntFilter;
  impersonatedUserId?: IntFilter;
};

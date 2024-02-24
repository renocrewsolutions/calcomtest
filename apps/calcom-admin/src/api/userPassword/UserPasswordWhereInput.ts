import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserPasswordWhereInput = {
  hash?: StringFilter;
  id?: IntFilter;
  userId?: IntFilter;
};

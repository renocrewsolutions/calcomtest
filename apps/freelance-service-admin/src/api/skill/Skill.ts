import { User } from "../user/User";

export type Skill = {
  description: string | null;
  id: number;
  name: string;
  user?: User | null;
};

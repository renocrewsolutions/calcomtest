/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Skill, // @ts-ignore
  User,
} from "@prisma/client";

export class SkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SkillCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkillCountArgs>
  ): Promise<number> {
    return this.prisma.skill.count(args);
  }

  async skills<T extends Prisma.SkillFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkillFindManyArgs>
  ): Promise<Skill[]> {
    return this.prisma.skill.findMany(args);
  }
  async skill<T extends Prisma.SkillFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkillFindUniqueArgs>
  ): Promise<Skill | null> {
    return this.prisma.skill.findUnique(args);
  }
  async createSkill<T extends Prisma.SkillCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkillCreateArgs>
  ): Promise<Skill> {
    return this.prisma.skill.create<T>(args);
  }
  async updateSkill<T extends Prisma.SkillUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkillUpdateArgs>
  ): Promise<Skill> {
    return this.prisma.skill.update<T>(args);
  }
  async deleteSkill<T extends Prisma.SkillDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkillDeleteArgs>
  ): Promise<Skill> {
    return this.prisma.skill.delete(args);
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.skill
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

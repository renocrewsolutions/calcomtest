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
  VerifiedNumber, // @ts-ignore
  Team,
} from "@prisma/client";

export class VerifiedNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VerifiedNumberCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerifiedNumberCountArgs>
  ): Promise<number> {
    return this.prisma.verifiedNumber.count(args);
  }

  async verifiedNumbers<T extends Prisma.VerifiedNumberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerifiedNumberFindManyArgs>
  ): Promise<VerifiedNumber[]> {
    return this.prisma.verifiedNumber.findMany(args);
  }
  async verifiedNumber<T extends Prisma.VerifiedNumberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerifiedNumberFindUniqueArgs>
  ): Promise<VerifiedNumber | null> {
    return this.prisma.verifiedNumber.findUnique(args);
  }
  async createVerifiedNumber<T extends Prisma.VerifiedNumberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerifiedNumberCreateArgs>
  ): Promise<VerifiedNumber> {
    return this.prisma.verifiedNumber.create<T>(args);
  }
  async updateVerifiedNumber<T extends Prisma.VerifiedNumberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerifiedNumberUpdateArgs>
  ): Promise<VerifiedNumber> {
    return this.prisma.verifiedNumber.update<T>(args);
  }
  async deleteVerifiedNumber<T extends Prisma.VerifiedNumberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerifiedNumberDeleteArgs>
  ): Promise<VerifiedNumber> {
    return this.prisma.verifiedNumber.delete(args);
  }

  async getTeam(parentId: number): Promise<Team | null> {
    return this.prisma.verifiedNumber
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }
}

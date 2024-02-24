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
  AccessCode, // @ts-ignore
  OAuthClient, // @ts-ignore
  Team,
} from "@prisma/client";

export class AccessCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccessCodeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessCodeCountArgs>
  ): Promise<number> {
    return this.prisma.accessCode.count(args);
  }

  async accessCodes<T extends Prisma.AccessCodeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessCodeFindManyArgs>
  ): Promise<AccessCode[]> {
    return this.prisma.accessCode.findMany(args);
  }
  async accessCode<T extends Prisma.AccessCodeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessCodeFindUniqueArgs>
  ): Promise<AccessCode | null> {
    return this.prisma.accessCode.findUnique(args);
  }
  async createAccessCode<T extends Prisma.AccessCodeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessCodeCreateArgs>
  ): Promise<AccessCode> {
    return this.prisma.accessCode.create<T>(args);
  }
  async updateAccessCode<T extends Prisma.AccessCodeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessCodeUpdateArgs>
  ): Promise<AccessCode> {
    return this.prisma.accessCode.update<T>(args);
  }
  async deleteAccessCode<T extends Prisma.AccessCodeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessCodeDeleteArgs>
  ): Promise<AccessCode> {
    return this.prisma.accessCode.delete(args);
  }

  async getClient(parentId: number): Promise<OAuthClient | null> {
    return this.prisma.accessCode
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }

  async getTeam(parentId: number): Promise<Team | null> {
    return this.prisma.accessCode
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }
}

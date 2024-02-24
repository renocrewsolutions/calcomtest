/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TempOrgRedirect } from "@prisma/client";

export class TempOrgRedirectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TempOrgRedirectCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TempOrgRedirectCountArgs>
  ): Promise<number> {
    return this.prisma.tempOrgRedirect.count(args);
  }

  async tempOrgRedirects<T extends Prisma.TempOrgRedirectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TempOrgRedirectFindManyArgs>
  ): Promise<TempOrgRedirect[]> {
    return this.prisma.tempOrgRedirect.findMany(args);
  }
  async tempOrgRedirect<T extends Prisma.TempOrgRedirectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TempOrgRedirectFindUniqueArgs>
  ): Promise<TempOrgRedirect | null> {
    return this.prisma.tempOrgRedirect.findUnique(args);
  }
  async createTempOrgRedirect<T extends Prisma.TempOrgRedirectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TempOrgRedirectCreateArgs>
  ): Promise<TempOrgRedirect> {
    return this.prisma.tempOrgRedirect.create<T>(args);
  }
  async updateTempOrgRedirect<T extends Prisma.TempOrgRedirectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TempOrgRedirectUpdateArgs>
  ): Promise<TempOrgRedirect> {
    return this.prisma.tempOrgRedirect.update<T>(args);
  }
  async deleteTempOrgRedirect<T extends Prisma.TempOrgRedirectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TempOrgRedirectDeleteArgs>
  ): Promise<TempOrgRedirect> {
    return this.prisma.tempOrgRedirect.delete(args);
  }
}
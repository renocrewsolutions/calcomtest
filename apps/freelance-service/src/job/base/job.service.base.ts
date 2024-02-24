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
  Job, // @ts-ignore
  Bid, // @ts-ignore
  Review, // @ts-ignore
  Transaction, // @ts-ignore
  User,
} from "@prisma/client";

export class JobServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobCountArgs>
  ): Promise<number> {
    return this.prisma.job.count(args);
  }

  async jobs<T extends Prisma.JobFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindManyArgs>
  ): Promise<Job[]> {
    return this.prisma.job.findMany(args);
  }
  async job<T extends Prisma.JobFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindUniqueArgs>
  ): Promise<Job | null> {
    return this.prisma.job.findUnique(args);
  }
  async createJob<T extends Prisma.JobCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobCreateArgs>
  ): Promise<Job> {
    return this.prisma.job.create<T>(args);
  }
  async updateJob<T extends Prisma.JobUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobUpdateArgs>
  ): Promise<Job> {
    return this.prisma.job.update<T>(args);
  }
  async deleteJob<T extends Prisma.JobDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobDeleteArgs>
  ): Promise<Job> {
    return this.prisma.job.delete(args);
  }

  async findBids(
    parentId: number,
    args: Prisma.BidFindManyArgs
  ): Promise<Bid[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bids(args);
  }

  async findReviews(
    parentId: number,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }

  async findTransactions(
    parentId: number,
    args: Prisma.TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }

  async getClient(parentId: number): Promise<User | null> {
    return this.prisma.job
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}

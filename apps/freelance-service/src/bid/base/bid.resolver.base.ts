/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Bid } from "./Bid";
import { BidCountArgs } from "./BidCountArgs";
import { BidFindManyArgs } from "./BidFindManyArgs";
import { BidFindUniqueArgs } from "./BidFindUniqueArgs";
import { CreateBidArgs } from "./CreateBidArgs";
import { UpdateBidArgs } from "./UpdateBidArgs";
import { DeleteBidArgs } from "./DeleteBidArgs";
import { User1 } from "../../user1/base/User1";
import { Job } from "../../job/base/Job";
import { BidService } from "../bid.service";
@graphql.Resolver(() => Bid)
export class BidResolverBase {
  constructor(protected readonly service: BidService) {}

  async _bidsMeta(
    @graphql.Args() args: BidCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Bid])
  async bids(@graphql.Args() args: BidFindManyArgs): Promise<Bid[]> {
    return this.service.bids(args);
  }

  @graphql.Query(() => Bid, { nullable: true })
  async bid(@graphql.Args() args: BidFindUniqueArgs): Promise<Bid | null> {
    const result = await this.service.bid(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Bid)
  async createBid(@graphql.Args() args: CreateBidArgs): Promise<Bid> {
    return await this.service.createBid({
      ...args,
      data: {
        ...args.data,

        freelancer: {
          connect: args.data.freelancer,
        },

        job: {
          connect: args.data.job,
        },
      },
    });
  }

  @graphql.Mutation(() => Bid)
  async updateBid(@graphql.Args() args: UpdateBidArgs): Promise<Bid | null> {
    try {
      return await this.service.updateBid({
        ...args,
        data: {
          ...args.data,

          freelancer: {
            connect: args.data.freelancer,
          },

          job: {
            connect: args.data.job,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bid)
  async deleteBid(@graphql.Args() args: DeleteBidArgs): Promise<Bid | null> {
    try {
      return await this.service.deleteBid(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User1, {
    nullable: true,
    name: "freelancer",
  })
  async getFreelancer(@graphql.Parent() parent: Bid): Promise<User1 | null> {
    const result = await this.service.getFreelancer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Job, {
    nullable: true,
    name: "job",
  })
  async getJob(@graphql.Parent() parent: Bid): Promise<Job | null> {
    const result = await this.service.getJob(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

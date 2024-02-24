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
import { Membership } from "./Membership";
import { MembershipCountArgs } from "./MembershipCountArgs";
import { MembershipFindManyArgs } from "./MembershipFindManyArgs";
import { MembershipFindUniqueArgs } from "./MembershipFindUniqueArgs";
import { CreateMembershipArgs } from "./CreateMembershipArgs";
import { UpdateMembershipArgs } from "./UpdateMembershipArgs";
import { DeleteMembershipArgs } from "./DeleteMembershipArgs";
import { Team } from "../../team/base/Team";
import { MembershipService } from "../membership.service";
@graphql.Resolver(() => Membership)
export class MembershipResolverBase {
  constructor(protected readonly service: MembershipService) {}

  async _membershipsMeta(
    @graphql.Args() args: MembershipCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Membership])
  async memberships(
    @graphql.Args() args: MembershipFindManyArgs
  ): Promise<Membership[]> {
    return this.service.memberships(args);
  }

  @graphql.Query(() => Membership, { nullable: true })
  async membership(
    @graphql.Args() args: MembershipFindUniqueArgs
  ): Promise<Membership | null> {
    const result = await this.service.membership(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Membership)
  async createMembership(
    @graphql.Args() args: CreateMembershipArgs
  ): Promise<Membership> {
    return await this.service.createMembership({
      ...args,
      data: {
        ...args.data,

        team: {
          connect: args.data.team,
        },
      },
    });
  }

  @graphql.Mutation(() => Membership)
  async updateMembership(
    @graphql.Args() args: UpdateMembershipArgs
  ): Promise<Membership | null> {
    try {
      return await this.service.updateMembership({
        ...args,
        data: {
          ...args.data,

          team: {
            connect: args.data.team,
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

  @graphql.Mutation(() => Membership)
  async deleteMembership(
    @graphql.Args() args: DeleteMembershipArgs
  ): Promise<Membership | null> {
    try {
      return await this.service.deleteMembership(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Team, {
    nullable: true,
    name: "team",
  })
  async getTeam(@graphql.Parent() parent: Membership): Promise<Team | null> {
    const result = await this.service.getTeam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

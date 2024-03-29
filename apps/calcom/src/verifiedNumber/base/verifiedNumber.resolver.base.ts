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
import { VerifiedNumber } from "./VerifiedNumber";
import { VerifiedNumberCountArgs } from "./VerifiedNumberCountArgs";
import { VerifiedNumberFindManyArgs } from "./VerifiedNumberFindManyArgs";
import { VerifiedNumberFindUniqueArgs } from "./VerifiedNumberFindUniqueArgs";
import { CreateVerifiedNumberArgs } from "./CreateVerifiedNumberArgs";
import { UpdateVerifiedNumberArgs } from "./UpdateVerifiedNumberArgs";
import { DeleteVerifiedNumberArgs } from "./DeleteVerifiedNumberArgs";
import { Team } from "../../team/base/Team";
import { VerifiedNumberService } from "../verifiedNumber.service";
@graphql.Resolver(() => VerifiedNumber)
export class VerifiedNumberResolverBase {
  constructor(protected readonly service: VerifiedNumberService) {}

  async _verifiedNumbersMeta(
    @graphql.Args() args: VerifiedNumberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VerifiedNumber])
  async verifiedNumbers(
    @graphql.Args() args: VerifiedNumberFindManyArgs
  ): Promise<VerifiedNumber[]> {
    return this.service.verifiedNumbers(args);
  }

  @graphql.Query(() => VerifiedNumber, { nullable: true })
  async verifiedNumber(
    @graphql.Args() args: VerifiedNumberFindUniqueArgs
  ): Promise<VerifiedNumber | null> {
    const result = await this.service.verifiedNumber(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VerifiedNumber)
  async createVerifiedNumber(
    @graphql.Args() args: CreateVerifiedNumberArgs
  ): Promise<VerifiedNumber> {
    return await this.service.createVerifiedNumber({
      ...args,
      data: {
        ...args.data,

        team: args.data.team
          ? {
              connect: args.data.team,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => VerifiedNumber)
  async updateVerifiedNumber(
    @graphql.Args() args: UpdateVerifiedNumberArgs
  ): Promise<VerifiedNumber | null> {
    try {
      return await this.service.updateVerifiedNumber({
        ...args,
        data: {
          ...args.data,

          team: args.data.team
            ? {
                connect: args.data.team,
              }
            : undefined,
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

  @graphql.Mutation(() => VerifiedNumber)
  async deleteVerifiedNumber(
    @graphql.Args() args: DeleteVerifiedNumberArgs
  ): Promise<VerifiedNumber | null> {
    try {
      return await this.service.deleteVerifiedNumber(args);
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
  async getTeam(
    @graphql.Parent() parent: VerifiedNumber
  ): Promise<Team | null> {
    const result = await this.service.getTeam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

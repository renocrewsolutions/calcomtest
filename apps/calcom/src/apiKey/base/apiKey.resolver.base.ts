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
import { ApiKey } from "./ApiKey";
import { ApiKeyCountArgs } from "./ApiKeyCountArgs";
import { ApiKeyFindManyArgs } from "./ApiKeyFindManyArgs";
import { ApiKeyFindUniqueArgs } from "./ApiKeyFindUniqueArgs";
import { CreateApiKeyArgs } from "./CreateApiKeyArgs";
import { UpdateApiKeyArgs } from "./UpdateApiKeyArgs";
import { DeleteApiKeyArgs } from "./DeleteApiKeyArgs";
import { AppModel } from "../../appModel/base/AppModel";
import { Team } from "../../team/base/Team";
import { ApiKeyService } from "../apiKey.service";
@graphql.Resolver(() => ApiKey)
export class ApiKeyResolverBase {
  constructor(protected readonly service: ApiKeyService) {}

  async _apiKeysMeta(
    @graphql.Args() args: ApiKeyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApiKey])
  async apiKeys(@graphql.Args() args: ApiKeyFindManyArgs): Promise<ApiKey[]> {
    return this.service.apiKeys(args);
  }

  @graphql.Query(() => ApiKey, { nullable: true })
  async apiKey(
    @graphql.Args() args: ApiKeyFindUniqueArgs
  ): Promise<ApiKey | null> {
    const result = await this.service.apiKey(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApiKey)
  async createApiKey(@graphql.Args() args: CreateApiKeyArgs): Promise<ApiKey> {
    return await this.service.createApiKey({
      ...args,
      data: {
        ...args.data,

        appField: args.data.appField
          ? {
              connect: args.data.appField,
            }
          : undefined,

        team: args.data.team
          ? {
              connect: args.data.team,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ApiKey)
  async updateApiKey(
    @graphql.Args() args: UpdateApiKeyArgs
  ): Promise<ApiKey | null> {
    try {
      return await this.service.updateApiKey({
        ...args,
        data: {
          ...args.data,

          appField: args.data.appField
            ? {
                connect: args.data.appField,
              }
            : undefined,

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

  @graphql.Mutation(() => ApiKey)
  async deleteApiKey(
    @graphql.Args() args: DeleteApiKeyArgs
  ): Promise<ApiKey | null> {
    try {
      return await this.service.deleteApiKey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => AppModel, {
    nullable: true,
    name: "appField",
  })
  async getAppField(
    @graphql.Parent() parent: ApiKey
  ): Promise<AppModel | null> {
    const result = await this.service.getAppField(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Team, {
    nullable: true,
    name: "team",
  })
  async getTeam(@graphql.Parent() parent: ApiKey): Promise<Team | null> {
    const result = await this.service.getTeam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

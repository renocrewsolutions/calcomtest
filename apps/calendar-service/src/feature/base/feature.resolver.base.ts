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
import { Feature } from "./Feature";
import { FeatureCountArgs } from "./FeatureCountArgs";
import { FeatureFindManyArgs } from "./FeatureFindManyArgs";
import { FeatureFindUniqueArgs } from "./FeatureFindUniqueArgs";
import { CreateFeatureArgs } from "./CreateFeatureArgs";
import { UpdateFeatureArgs } from "./UpdateFeatureArgs";
import { DeleteFeatureArgs } from "./DeleteFeatureArgs";
import { FeatureService } from "../feature.service";
@graphql.Resolver(() => Feature)
export class FeatureResolverBase {
  constructor(protected readonly service: FeatureService) {}

  async _featuresMeta(
    @graphql.Args() args: FeatureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Feature])
  async features(
    @graphql.Args() args: FeatureFindManyArgs
  ): Promise<Feature[]> {
    return this.service.features(args);
  }

  @graphql.Query(() => Feature, { nullable: true })
  async feature(
    @graphql.Args() args: FeatureFindUniqueArgs
  ): Promise<Feature | null> {
    const result = await this.service.feature(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Feature)
  async createFeature(
    @graphql.Args() args: CreateFeatureArgs
  ): Promise<Feature> {
    return await this.service.createFeature({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Feature)
  async updateFeature(
    @graphql.Args() args: UpdateFeatureArgs
  ): Promise<Feature | null> {
    try {
      return await this.service.updateFeature({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Feature)
  async deleteFeature(
    @graphql.Args() args: DeleteFeatureArgs
  ): Promise<Feature | null> {
    try {
      return await this.service.deleteFeature(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

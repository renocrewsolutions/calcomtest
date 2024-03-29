/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Feature } from "@prisma/client";

export class FeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FeatureCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureCountArgs>
  ): Promise<number> {
    return this.prisma.feature.count(args);
  }

  async features<T extends Prisma.FeatureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureFindManyArgs>
  ): Promise<Feature[]> {
    return this.prisma.feature.findMany(args);
  }
  async feature<T extends Prisma.FeatureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureFindUniqueArgs>
  ): Promise<Feature | null> {
    return this.prisma.feature.findUnique(args);
  }
  async createFeature<T extends Prisma.FeatureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureCreateArgs>
  ): Promise<Feature> {
    return this.prisma.feature.create<T>(args);
  }
  async updateFeature<T extends Prisma.FeatureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureUpdateArgs>
  ): Promise<Feature> {
    return this.prisma.feature.update<T>(args);
  }
  async deleteFeature<T extends Prisma.FeatureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureDeleteArgs>
  ): Promise<Feature> {
    return this.prisma.feature.delete(args);
  }
}

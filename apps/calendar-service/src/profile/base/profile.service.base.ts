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
  Profile, // @ts-ignore
  EventType, // @ts-ignore
  User, // @ts-ignore
  Team,
} from "@prisma/client";

export class ProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProfileCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileCountArgs>
  ): Promise<number> {
    return this.prisma.profile.count(args);
  }

  async profiles<T extends Prisma.ProfileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>
  ): Promise<Profile[]> {
    return this.prisma.profile.findMany(args);
  }
  async profile<T extends Prisma.ProfileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindUniqueArgs>
  ): Promise<Profile | null> {
    return this.prisma.profile.findUnique(args);
  }
  async createProfile<T extends Prisma.ProfileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileCreateArgs>
  ): Promise<Profile> {
    return this.prisma.profile.create<T>(args);
  }
  async updateProfile<T extends Prisma.ProfileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileUpdateArgs>
  ): Promise<Profile> {
    return this.prisma.profile.update<T>(args);
  }
  async deleteProfile<T extends Prisma.ProfileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileDeleteArgs>
  ): Promise<Profile> {
    return this.prisma.profile.delete(args);
  }

  async findEventTypes(
    parentId: number,
    args: Prisma.EventTypeFindManyArgs
  ): Promise<EventType[]> {
    return this.prisma.profile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .eventTypes(args);
  }

  async getMovedFromUser(parentId: number): Promise<User | null> {
    return this.prisma.profile
      .findUnique({
        where: { id: parentId },
      })
      .movedFromUser();
  }

  async getOrganization(parentId: number): Promise<Team | null> {
    return this.prisma.profile
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.profile
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

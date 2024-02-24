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
  Message, // @ts-ignore
  User1,
} from "@prisma/client";

export class MessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MessageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageCountArgs>
  ): Promise<number> {
    return this.prisma.message.count(args);
  }

  async messages<T extends Prisma.MessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindManyArgs>
  ): Promise<Message[]> {
    return this.prisma.message.findMany(args);
  }
  async message<T extends Prisma.MessageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindUniqueArgs>
  ): Promise<Message | null> {
    return this.prisma.message.findUnique(args);
  }
  async createMessage<T extends Prisma.MessageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageCreateArgs>
  ): Promise<Message> {
    return this.prisma.message.create<T>(args);
  }
  async updateMessage<T extends Prisma.MessageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageUpdateArgs>
  ): Promise<Message> {
    return this.prisma.message.update<T>(args);
  }
  async deleteMessage<T extends Prisma.MessageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageDeleteArgs>
  ): Promise<Message> {
    return this.prisma.message.delete(args);
  }

  async getReceiver(parentId: number): Promise<User1 | null> {
    return this.prisma.message
      .findUnique({
        where: { id: parentId },
      })
      .receiver();
  }

  async getSender(parentId: number): Promise<User1 | null> {
    return this.prisma.message
      .findUnique({
        where: { id: parentId },
      })
      .sender();
  }
}

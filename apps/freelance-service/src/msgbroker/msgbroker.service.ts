import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MsgbrokerServiceBase } from "./base/msgbroker.service.base";

@Injectable()
export class MsgbrokerService extends MsgbrokerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

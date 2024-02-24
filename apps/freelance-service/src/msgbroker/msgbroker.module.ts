import { Module } from "@nestjs/common";
import { MsgbrokerModuleBase } from "./base/msgbroker.module.base";
import { MsgbrokerService } from "./msgbroker.service";
import { MsgbrokerController } from "./msgbroker.controller";
import { MsgbrokerResolver } from "./msgbroker.resolver";

@Module({
  imports: [MsgbrokerModuleBase],
  controllers: [MsgbrokerController],
  providers: [MsgbrokerService, MsgbrokerResolver],
  exports: [MsgbrokerService],
})
export class MsgbrokerModule {}

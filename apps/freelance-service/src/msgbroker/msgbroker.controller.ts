import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MsgbrokerService } from "./msgbroker.service";
import { MsgbrokerControllerBase } from "./base/msgbroker.controller.base";

@swagger.ApiTags("msgbrokers")
@common.Controller("msgbrokers")
export class MsgbrokerController extends MsgbrokerControllerBase {
  constructor(protected readonly service: MsgbrokerService) {
    super(service);
  }
}

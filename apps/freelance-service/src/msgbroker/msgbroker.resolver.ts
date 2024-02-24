import * as graphql from "@nestjs/graphql";
import { MsgbrokerResolverBase } from "./base/msgbroker.resolver.base";
import { Msgbroker } from "./base/Msgbroker";
import { MsgbrokerService } from "./msgbroker.service";

@graphql.Resolver(() => Msgbroker)
export class MsgbrokerResolver extends MsgbrokerResolverBase {
  constructor(protected readonly service: MsgbrokerService) {
    super(service);
  }
}

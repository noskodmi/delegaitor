import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HotWalletService } from "./hotWallet.service";
import { HotWalletControllerBase } from "./base/hotWallet.controller.base";

@swagger.ApiTags("hotWallets")
@common.Controller("hotWallets")
export class HotWalletController extends HotWalletControllerBase {
  constructor(protected readonly service: HotWalletService) {
    super(service);
  }
}

import { Module } from "@nestjs/common";
import { HotWalletModuleBase } from "./base/hotWallet.module.base";
import { HotWalletService } from "./hotWallet.service";
import { HotWalletController } from "./hotWallet.controller";
import { HotWalletResolver } from "./hotWallet.resolver";

@Module({
  imports: [HotWalletModuleBase],
  controllers: [HotWalletController],
  providers: [HotWalletService, HotWalletResolver],
  exports: [HotWalletService],
})
export class HotWalletModule {}

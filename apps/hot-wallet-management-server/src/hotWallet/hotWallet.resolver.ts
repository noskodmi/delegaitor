import * as graphql from "@nestjs/graphql";
import { HotWalletResolverBase } from "./base/hotWallet.resolver.base";
import { HotWallet } from "./base/HotWallet";
import { HotWalletService } from "./hotWallet.service";

@graphql.Resolver(() => HotWallet)
export class HotWalletResolver extends HotWalletResolverBase {
  constructor(protected readonly service: HotWalletService) {
    super(service);
  }
}

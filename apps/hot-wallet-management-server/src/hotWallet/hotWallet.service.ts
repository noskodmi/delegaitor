import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HotWalletServiceBase } from "./base/hotWallet.service.base";

@Injectable()
export class HotWalletService extends HotWalletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

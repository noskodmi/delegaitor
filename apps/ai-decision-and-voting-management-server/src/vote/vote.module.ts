import { Module } from "@nestjs/common";
import { VoteModuleBase } from "./base/vote.module.base";
import { VoteService } from "./vote.service";
import { VoteController } from "./vote.controller";
import { VoteResolver } from "./vote.resolver";

@Module({
  imports: [VoteModuleBase],
  controllers: [VoteController],
  providers: [VoteService, VoteResolver],
  exports: [VoteService],
})
export class VoteModule {}

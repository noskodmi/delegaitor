import { Module } from "@nestjs/common";
import { AiDecisionModuleBase } from "./base/aiDecision.module.base";
import { AiDecisionService } from "./aiDecision.service";
import { AiDecisionController } from "./aiDecision.controller";
import { AiDecisionResolver } from "./aiDecision.resolver";

@Module({
  imports: [AiDecisionModuleBase],
  controllers: [AiDecisionController],
  providers: [AiDecisionService, AiDecisionResolver],
  exports: [AiDecisionService],
})
export class AiDecisionModule {}

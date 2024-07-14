import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiDecisionService } from "./aiDecision.service";
import { AiDecisionControllerBase } from "./base/aiDecision.controller.base";

@swagger.ApiTags("aiDecisions")
@common.Controller("aiDecisions")
export class AiDecisionController extends AiDecisionControllerBase {
  constructor(protected readonly service: AiDecisionService) {
    super(service);
  }
}

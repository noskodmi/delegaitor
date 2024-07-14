import * as graphql from "@nestjs/graphql";
import { AiDecisionResolverBase } from "./base/aiDecision.resolver.base";
import { AiDecision } from "./base/AiDecision";
import { AiDecisionService } from "./aiDecision.service";

@graphql.Resolver(() => AiDecision)
export class AiDecisionResolver extends AiDecisionResolverBase {
  constructor(protected readonly service: AiDecisionService) {
    super(service);
  }
}

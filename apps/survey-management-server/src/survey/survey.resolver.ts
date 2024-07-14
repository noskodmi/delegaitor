import * as graphql from "@nestjs/graphql";
import { SurveyResolverBase } from "./base/survey.resolver.base";
import { Survey } from "./base/Survey";
import { SurveyService } from "./survey.service";

@graphql.Resolver(() => Survey)
export class SurveyResolver extends SurveyResolverBase {
  constructor(protected readonly service: SurveyService) {
    super(service);
  }
}

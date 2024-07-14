import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SurveyService } from "./survey.service";
import { SurveyControllerBase } from "./base/survey.controller.base";

@swagger.ApiTags("surveys")
@common.Controller("surveys")
export class SurveyController extends SurveyControllerBase {
  constructor(protected readonly service: SurveyService) {
    super(service);
  }
}

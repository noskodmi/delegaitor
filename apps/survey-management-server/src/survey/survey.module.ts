import { Module } from "@nestjs/common";
import { SurveyModuleBase } from "./base/survey.module.base";
import { SurveyService } from "./survey.service";
import { SurveyController } from "./survey.controller";
import { SurveyResolver } from "./survey.resolver";

@Module({
  imports: [SurveyModuleBase],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyResolver],
  exports: [SurveyService],
})
export class SurveyModule {}

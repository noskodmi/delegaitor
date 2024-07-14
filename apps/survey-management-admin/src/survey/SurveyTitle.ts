import { Survey as TSurvey } from "../api/survey/Survey";

export const SURVEY_TITLE_FIELD = "id";

export const SurveyTitle = (record: TSurvey): string => {
  return record.id?.toString() || String(record.id);
};

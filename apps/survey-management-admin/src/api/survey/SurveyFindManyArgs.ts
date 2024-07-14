import { SurveyWhereInput } from "./SurveyWhereInput";
import { SurveyOrderByInput } from "./SurveyOrderByInput";

export type SurveyFindManyArgs = {
  where?: SurveyWhereInput;
  orderBy?: Array<SurveyOrderByInput>;
  skip?: number;
  take?: number;
};

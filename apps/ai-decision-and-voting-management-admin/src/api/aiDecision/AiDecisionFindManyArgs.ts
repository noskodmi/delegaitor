import { AiDecisionWhereInput } from "./AiDecisionWhereInput";
import { AiDecisionOrderByInput } from "./AiDecisionOrderByInput";

export type AiDecisionFindManyArgs = {
  where?: AiDecisionWhereInput;
  orderBy?: Array<AiDecisionOrderByInput>;
  skip?: number;
  take?: number;
};

import { AiDecision as TAiDecision } from "../api/aiDecision/AiDecision";

export const AIDECISION_TITLE_FIELD = "id";

export const AiDecisionTitle = (record: TAiDecision): string => {
  return record.id?.toString() || String(record.id);
};

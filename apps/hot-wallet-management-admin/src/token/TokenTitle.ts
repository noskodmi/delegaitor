import { Token as TToken } from "../api/token/Token";

export const TOKEN_TITLE_FIELD = "id";

export const TokenTitle = (record: TToken): string => {
  return record.id?.toString() || String(record.id);
};

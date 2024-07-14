import { HotWallet as THotWallet } from "../api/hotWallet/HotWallet";

export const HOTWALLET_TITLE_FIELD = "id";

export const HotWalletTitle = (record: THotWallet): string => {
  return record.id?.toString() || String(record.id);
};

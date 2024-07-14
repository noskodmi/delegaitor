import { HotWalletWhereInput } from "./HotWalletWhereInput";
import { HotWalletOrderByInput } from "./HotWalletOrderByInput";

export type HotWalletFindManyArgs = {
  where?: HotWalletWhereInput;
  orderBy?: Array<HotWalletOrderByInput>;
  skip?: number;
  take?: number;
};

"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import type { Transport } from "viem";
import { createConfig, http } from "wagmi";
import {
  mainnet,
  sepolia,
  celoAlfajores,
  polygonAmoy,
  neonDevnet,
  arbitrumSepolia,
  scrollSepolia,
  lineaTestnet,
  morphSepolia,
  baseSepolia
} from "wagmi/chains";

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    "WalletConnect project ID is not defined. Please check your environment variables.",
  );
}

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        ledgerWallet,
        rabbyWallet,
        coinbaseWallet,
        argentWallet,
        safeWallet,
      ],
    },
  ],
  { appName: "Delegaitor", projectId: walletConnectProjectId },
);


const transports: Record<number, Transport> = {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
  [celoAlfajores.id]: http(),
  [polygonAmoy.id]: http(),
  [neonDevnet.id]: http(),
  [arbitrumSepolia.id]: http(),
  [scrollSepolia.id]: http(),
  [lineaTestnet.id]: http(),
  [morphSepolia.id]: http(),
  [baseSepolia.id]: http(),
};
export const wagmiConfig = createConfig({
  chains: [
    mainnet,
    sepolia,
    celoAlfajores,
    polygonAmoy,
    neonDevnet,
    arbitrumSepolia,
    scrollSepolia,
    lineaTestnet,
    morphSepolia,
    baseSepolia,
  ],
  connectors,
  transports,
  ssr: true,
});

"use client";
import { type FC, type MouseEvent, useEffect, useState } from "react";

import { Button, VStack } from "@chakra-ui/react";

import { useAccount, useContractWrite } from "wagmi";

import { useNotify } from "@/hooks";

const contractAddresses = {
  1: "0xYourMainnetContractAddress",
  4: "0xYourRinkebyContractAddress",
  2542: "0x8a67291abf37cf1c168a3786fd63de9e5097dac8"
};

const abi = [
  {
    "inputs": [],
    "name": "claim",
    "outputs": [],
    "type": "function"
  }
];

const Claim: FC = () => {
  const { connector, isConnected } = useAccount();
  const { chain } = useAccount();
  const [isPending, setIsPending] = useState(false);
  const { notifyError, notifySuccess } = useNotify();

  const chainId = chain?.id ?? 1; // Default to Mainnet (1)
  const contractAddress = contractAddresses[chainId as keyof typeof contractAddresses];

  const { data, error, isLoading, isSuccess } = useContractWrite({
    addressOrName: contractAddress,
    contractInterface: abi,
  },
  'claim'
  );

  const { hash } = data || {}

  const handleClaim = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('claim')
    console.log(data)
    if (!isConnected) return;
    console.log('hey')
  };

  useEffect(() => {
    if (isLoading) {
      setIsPending(true);
    } else {
      setIsPending(false);
    }

    if (isSuccess && data) {
      notifySuccess({
        title: "Claim successful!",
        message: `Transaction Hash: ${data.hash}`,
      });
    }

    if (error) {
      notifyError({
        title: "Claim failed",
        message: error.message,
      });
    }
  }, [isLoading, isSuccess, data, error, notifyError, notifySuccess]);

  return (
    <VStack w={"45%"} minWidth={"270px"} gap={2}>
      <Button
        variant="ghost"
        onClick={handleClaim}
        isLoading={isPending}
        className="custom-button"
        disabled={!isConnected}
      >
        Claim
      </Button>
    </VStack>
  );
};

export default Claim;

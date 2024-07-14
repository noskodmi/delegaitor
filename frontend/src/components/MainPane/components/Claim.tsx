import { FC } from "react";
import { Button, VStack, useToast } from "@chakra-ui/react";
import { useWriteContract, useAccount } from "wagmi";
import { useNotify } from "@/hooks"; 

const contractAddresses = {
    84532: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
    421614: "0xf52fd60afac5c14a07c247c045161feabfdc26df",
    44787: "0x8a67291abf37cf1c168a3786fd63de9e5097dac8",
    80002: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
    2810: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
    534351: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
    245022926: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
    59141: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
    11155111: "0xf52fD60AfAc5c14A07c247C045161Feabfdc26DF",
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
    const { chain } = useAccount();
    const { writeContract } = useWriteContract()

    const chainId = chain?.id ?? 1; // Default to Mainnet (1)
    const contractAddress = contractAddresses[chainId as keyof typeof contractAddresses];

    return (
        <VStack w={"45%"} minWidth={"270px"} gap={2}>
            {/* Optional: Add a chain selector if user can switch chains */}
            {/* <Select placeholder="Select chain" /> */}
            <Button
                variant="ghost"
                onClick={() => 
                    writeContract({ 
                      abi,
                      address: contractAddress,
                      functionName: 'claim',
                   })
                  }
                isDisabled={!chain || !contractAddress}
                className="custom-button"
            >
                Claim
            </Button>
        </VStack>
    );
};

export default Claim;

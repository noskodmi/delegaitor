import React from "react";

import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import styles from "@/styles/mainPane.module.css";

import PromptForm from "./PromptForm";

const PromptSetup: React.FC = () => {
  const { isConnected } = useAccount();
  const { colorMode } = useColorMode();

  if (!isConnected) {
    return <div>Please connect wallet</div>;
  }

  return (
    <Box
      className={styles.container}
      border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
    >
      <Flex className={styles.content}>
        {isConnected && <PromptForm />}
      </Flex>
    </Box>
  );
};


export default PromptSetup;

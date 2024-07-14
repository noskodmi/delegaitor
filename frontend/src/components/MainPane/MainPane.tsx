
import { type FC } from "react";

import { Box, Divider, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import styles from "@/styles/mainPane.module.css";

import {
  Status,
  Address,
  Chain,
  Balance,
  BlockNumber,
  Claim,
  Survey,
} from "./components";

import { useEffect, useState } from "react";
import axios from "axios";

// Add to the MainPane component
const MainPane: FC = () => {
  const { isConnected, address } = useAccount();
  const { colorMode } = useColorMode();
  const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isConnected) {
      const checkSurveyStatus = async () => {
        try {
          const response = await axios.get(`/api/survey-status?address=${address}`);
          setIsSurveySubmitted(response.data.isSurveySubmitted);
        } catch (error) {
          console.error("Error checking survey status:", error);
        } finally {
          setLoading(false);
        }
      };

      checkSurveyStatus();
    }
  }, [isConnected, address]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      className={styles.container}
      border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
    >
      <Heading as="h2" fontSize={"2rem"} mb={10}>
        Account
      </Heading>

      <Flex className={styles.content}>
        <Status />

        {isConnected && <Survey onSurveySubmit={() => setIsSurveySubmitted(true)} />}

        {isConnected && (
          <>
            <Address />
            <Chain />
            <Balance />
            <BlockNumber />

            <Divider mb={5} />

            <Flex
              w={"100%"}
              display={"flex"}
              justifyContent={"space-around"}
              flexWrap={"wrap"}
              gap={5}
            >
              <Claim />
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};


export default MainPane;

"use client";
import { Flex, Heading } from "@chakra-ui/react";

import { Header, PromptSetup } from "@/components";
import styles from "@/styles/mainPane.module.css";

export default function Home() {
  return (
    <Flex flexDirection="column" minHeight="100vh" >
      <Header />

      <Flex as="main" px={4} pb={12} flexDirection="column" className={styles.headerContainer}>
        <Heading pb={4} as="h1" fontSize={"1.5rem"}>
          AI DAO Delegator prompt setup
        </Heading>
        <PromptSetup />
      </Flex>
    </Flex>
  );
}

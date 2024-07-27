"use client";
import { Flex, Heading } from "@chakra-ui/react";

import { Header, Proposals } from "@/components";

export default function Home() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <Flex as="main" px={4} pb={12} flexDirection="column" maxWidth="1200px" mx="auto">
        <Heading pb={4} as="h1" fontSize={"1.5rem"}>
          DAO proposals
        </Heading>
        <Proposals />
      </Flex>
    </Flex>
  );
}

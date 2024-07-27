"use client";
import { Flex } from "@chakra-ui/react";

import { Header, Proposals, ProposalsHeader } from "@/components";

export default function Home() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <Flex as="main" px={4} pb={12} flexDirection="column" maxWidth="1200px" mx="auto">
        <ProposalsHeader />
        <Proposals />
      </Flex>
    </Flex>
  );
}

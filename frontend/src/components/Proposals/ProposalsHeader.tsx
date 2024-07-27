import React from "react";

import { Flex, Heading, VStack, Button } from "@chakra-ui/react";

const ProposalsHeader: React.FC = () => {
  return (
    <Flex justifyContent='space-between' pb={4}>
      <Heading as="h1" fontSize={"1.5rem"} lineHeight='38px'>
        DAO proposals
      </Heading>
      <VStack flexDirection='row' gap={2}>
        <Button size='sm' colorScheme="blue">
          Chat GPT 3.5
        </Button>
        <Button size='sm' colorScheme="green">
          + Add New DAO
        </Button>
      </VStack>
    </Flex>
  );
};

export default ProposalsHeader;

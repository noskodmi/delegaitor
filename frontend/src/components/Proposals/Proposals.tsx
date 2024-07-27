import { Box, Button, Flex, Grid, GridItem, Text, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import styles from "@/styles/mainPane.module.css";

import { unvotedProposals, votedProposals, defaultPrompt } from './mockProposals';

const Proposals: React.FC = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const handleEdit = () => router.push('/prompt');

  return (
    <>
      <Box mb={6} p={4} border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"} className={styles.shadow}>
        <Flex pb={4} justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">DAO AI Delegator Prompt</Text>
          <Button size="sm" colorScheme="blue" onClick={handleEdit}>
            Edit
          </Button>
        </Flex>
        <Box p={2} border='1px' borderColor='gray.200' borderRadius='4px'>
          <Text fontSize="md">{defaultPrompt}</Text>
        </Box>
      </Box>

      <Box mb={6}>
        <Text pb={4} fontSize="lg" fontWeight="bold">Unvoted Proposals</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
          {unvotedProposals.map((proposal) => (
            <GridItem key={proposal.id} p={4} border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"} className={styles.shadow}>
              <Text fontSize="md" fontWeight="bold">{proposal.id}</Text>
              <Text fontSize="sm" mb={2}>{proposal.description}</Text>
              <Text fontSize="sm" mb={2}><strong>DAO:</strong> {proposal.dao}</Text>
              <Text fontSize="sm" mb={2}><strong>Advised by Delegator:</strong> {proposal.advisedByDelegator ? 'Yes' : 'No'}</Text>
              <Text fontSize="sm" mb={2}><strong>AI Comment:</strong> {proposal.aiComment}</Text>
              <Text fontSize="sm" mb={4}><strong>Auto AI Vote Execution in:</strong> {proposal.autoVoteExecutionTime}</Text>
              <Flex justifyContent="space-between">
                <Button colorScheme="green" width="48%">Yes</Button>
                <Button colorScheme="red" width="48%">No</Button>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box>
        <Text pb={4} fontSize="lg" fontWeight="bold">Voted Proposals</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
          {votedProposals.map((proposal) => (
            <GridItem key={proposal.id} p={4} border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"} className={styles.shadow}>
              <Text fontSize="md" fontWeight="bold">{proposal.id}</Text>
              <Text fontSize="sm" mb={2}>{proposal.description}</Text>
              <Text fontSize="sm" mb={2}><strong>DAO:</strong> {proposal.dao}</Text>
              <Text fontSize="sm" mb={2}><strong>AI Comment:</strong> {proposal.aiComment}</Text>
              <Text fontSize="sm" mb={4}><strong>Voted:</strong> {proposal.voted}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Proposals;

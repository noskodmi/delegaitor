import React from "react";

import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from 'react-hook-form';

interface FormData {
  contractAddress: string;
  primaryGoal: string;
  kpis: string;
  governanceModel: string;
  challenges: string;
  investmentStrategy: string;
  longTermVision: string;
  conflictHandling: string;
  votingMechanisms: string;
  membershipCriteria: string;
}

const PromptForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      await axios.post("/api/submit-survey", data);
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <Input placeholder="DAO Contract Address" {...register('contractAddress')} />
          <Textarea placeholder="What is the primary goal of the DAO?" {...register('primaryGoal')} />
          <Textarea placeholder="What are the key performance indicators (KPIs) for the DAO?" {...register('kpis')} />
          <Textarea placeholder="What governance model does the DAO follow?" {...register('governanceModel')} />
          <Textarea placeholder="What are the main challenges the DAO is facing?" {...register('challenges')} />
          <Textarea placeholder="What is the DAO’s investment strategy?" {...register('investmentStrategy')} />
          <Textarea placeholder="What is the long-term vision for the DAO?" {...register('longTermVision')} />
          <Textarea placeholder="How does the DAO handle conflicts of interest?" {...register('conflictHandling')} />
          <Textarea placeholder="What are the voting mechanisms within the DAO?" {...register('votingMechanisms')} />
          <Textarea placeholder="What are the criteria for membership in the DAO?" {...register('membershipCriteria')} />
          <Button type="submit" colorScheme="teal" width="full">
            Generate Delegator Prompt
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default PromptForm;

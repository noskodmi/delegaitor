"use client";
import React from "react";
import { Button, TextField, Typography, Paper, Stack } from "@mui/material";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";

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

const PromtForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);
      await axios.post("/api/submit-survey", data);
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <Paper elevation={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Generate Delegator Prompt
        </Typography>
        <Stack flexDirection="column" justifyContent='start' alignItems="stretch" gap={2}>
          <TextField label="DAO Contract Address" {...register('contractAddress')} />
          <TextField type="textarea" label="What is the primary goal of the DAO?" multiline rows={3} {...register('primaryGoal')} sx={{ margin: '0' }} />
          <TextField label="What are the key performance indicators (KPIs) for the DAO?" multiline rows={3} {...register('kpis')} />
          <TextField label="What governance model does the DAO follow?" multiline rows={3} {...register('governanceModel')} />
          <TextField label="What are the main challenges the DAO is facing?" multiline rows={3} {...register('challenges')} />
          <TextField label="What is the DAO’s investment strategy?" multiline rows={3} {...register('investmentStrategy')} />
          <TextField label="What is the long-term vision for the DAO?" multiline rows={3} {...register('longTermVision')} />
          <TextField label="How does the DAO handle conflicts of interest?" multiline rows={3} {...register('conflictHandling')} />
          <TextField label="What are the voting mechanisms within the DAO?" multiline rows={3} {...register('votingMechanisms')} />
          <TextField label="What are the criteria for membership in the DAO?" multiline rows={3} {...register('membershipCriteria')} />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Generate Delegator Prompt
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default PromtForm;

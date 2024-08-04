"use client";
import React from "react";
import { Button, Typography, Paper, Stack, FormControl, InputLabel, OutlinedInput } from "@mui/material";
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

const PromptForm: React.FC = () => {
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
    <Paper elevation={3} sx={{ p: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom pb={3}>
          Generate Delegator Prompt
        </Typography>
        <Stack spacing={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="contract-address" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              DAO Contract Address
            </InputLabel>
            <OutlinedInput
              id="contract-address"
              {...register('contractAddress')}
              sx={{
                margin: 0,

                // "& .MuiOutlinedInput-notchedOutline": {
                //   border: ' 2px solid red !important',
                // },
                // "&:hover .MuiOutlinedInput-notchedOutline": {
                //   border: ' 2px solid green !important',
                // },
                // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                //   border: ' 2px solid #fff !important',
                // },

              }} />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="primary-goal" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What is the primary goal of the DAO?
            </InputLabel>
            <OutlinedInput
              id="primary-goal"
              {...register('primaryGoal')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="kpis" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What are the key performance indicators (KPIs) for the DAO?
            </InputLabel>
            <OutlinedInput
              id="kpis"
              {...register('kpis')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="governance-model" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What governance model does the DAO follow?
            </InputLabel>
            <OutlinedInput
              id="governance-model"
              {...register('governanceModel')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="challenges" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What are the main challenges the DAO is facing?
            </InputLabel>
            <OutlinedInput
              id="challenges"
              {...register('challenges')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="investment-strategy" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What is the DAO’s investment strategy?
            </InputLabel>
            <OutlinedInput
              id="investment-strategy"
              {...register('investmentStrategy')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="long-term-vision" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What is the long-term vision for the DAO?
            </InputLabel>
            <OutlinedInput
              id="long-term-vision"
              {...register('longTermVision')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="conflict-handling" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              How does the DAO handle conflicts of interest?
            </InputLabel>
            <OutlinedInput
              id="conflict-handling"
              {...register('conflictHandling')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="voting-mechanisms" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What are the voting mechanisms within the DAO?
            </InputLabel>
            <OutlinedInput
              id="voting-mechanisms"
              {...register('votingMechanisms')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="membership-criteria" sx={{ background: ({ palette }) => palette.background.paper, px: 1 }}>
              What are the criteria for membership in the DAO?
            </InputLabel>
            <OutlinedInput
              id="membership-criteria"
              {...register('membershipCriteria')}
              multiline
              rows={3}
              sx={{ margin: 0 }}
            />
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Generate Delegator Prompt
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default PromptForm;

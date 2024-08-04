"use client";
import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { unvotedProposals, votedProposals, defaultPrompt } from "./mockProposals";

const Proposals: React.FC = () => {
  const router = useRouter();
  const handleEdit = () => router.push('/prompt');

  return (
    <>
      <Paper elevation={3} sx={{ marginBottom: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            DAO AI Delegator Prompt
          </Typography>
          <Button variant="contained" color="primary" size="small" onClick={handleEdit}>
            Edit
          </Button>
        </Box>
        <Box sx={{ padding: 2, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>
          <Typography variant="body1">{defaultPrompt}</Typography>
        </Box>
      </Paper>

      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Unvoted Proposals
        </Typography>
        <Grid container spacing={2}>
          {unvotedProposals.map((proposal) => (
            <Grid item xs={12} sm={6} md={4} key={proposal.id}>
              <Paper elevation={3} sx={{
                padding: 2,
                border: theme => theme.palette.mode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)",
                borderRadius: theme => theme.shape.borderRadius
              }}>
                <Typography variant="body1" fontWeight="bold"><strong>Proposal:</strong> {proposal.id}</Typography>
                <Typography variant="body2" paragraph>{proposal.description}</Typography>
                <Typography variant="body2"><strong>DAO:</strong> {proposal.dao}</Typography>
                <Typography variant="body2"><strong>Advised by Delegator:</strong> {proposal.advisedByDelegator ? 'Yes' : 'No'}</Typography>
                <Typography variant="body2"><strong>AI Comment:</strong> {proposal.aiComment}</Typography>
                <Typography variant="body2" paragraph><strong>Auto AI Vote Execution in:</strong> {proposal.autoVoteExecutionTime}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="contained" color="success" size="small" sx={{ width: '48%' }}>Yes</Button>
                  <Button variant="contained" color="error" size="small" sx={{ width: '48%' }}>No</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Voted Proposals
        </Typography>
        <Grid container spacing={2}>
          {votedProposals.map((proposal) => (
            <Grid item xs={12} sm={6} md={4} key={proposal.id}>
              <Paper elevation={3} sx={{
                padding: 2,
                border: theme => theme.palette.mode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)",
                borderRadius: theme => theme.shape.borderRadius
              }}>
                <Typography variant="body1" fontWeight="bold"><strong>Proposal:</strong> {proposal.id}</Typography>
                <Typography variant="body2" paragraph>{proposal.description}</Typography>
                <Typography variant="body2"><strong>DAO:</strong> {proposal.dao}</Typography>
                <Typography variant="body2"><strong>AI Comment:</strong> {proposal.aiComment}</Typography>
                <Typography variant="body2" paragraph><strong>Voted:</strong> {proposal.voted}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Proposals;

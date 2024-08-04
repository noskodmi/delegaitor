"use client";
import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

const ProposalsHeader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 2 }}>
      <Typography variant="h5" sx={{ lineHeight: '38px' }}>
        DAO Proposals
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" color="primary" size="small">
          Chat GPT 3.5
        </Button>
        <Button variant="contained" color="success" size="small">
          + Add New DAO
        </Button>
      </Stack>
    </Box>
  );
};

export default ProposalsHeader;

"use client";
import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useAccount } from "wagmi";

const WalletAccessControl: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h6" color="error">
          Wallet Not Connected
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          You need to connect your wallet to access this section. Ensure that your wallet is properly connected and try again.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Connect Wallet
        </Button>
      </Paper>
    );
  }

  return (
    children
  );
};

export default WalletAccessControl;

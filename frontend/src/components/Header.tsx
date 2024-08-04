"use client";
import React from "react";
import { AppBar, Box, Toolbar, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const Header: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 10, padding: "1.5rem", borderRadius: '0', bgcolor: ({ palette }) => palette.background.paper }}>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Image src="/img/logo.png" alt="logo" width={45} height={45} />
          {!isTablet && (
            <Typography variant="h6" component="h1">
              Delegaitor
            </Typography>
          )}
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

"use client";
import React from "react";
import { AppBar, Box, Toolbar, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import logo from "../../../public/img/logo.png";

const Header: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 10, padding: "1.5rem" }}>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Image src={logo.src} alt="logo" width={45} height={45} />
          {!isTablet && (
            <Typography variant="h6" component="h1" sx={{ marginLeft: "1rem" }}>
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

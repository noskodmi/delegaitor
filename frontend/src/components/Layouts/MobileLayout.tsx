"use client";

import React from "react";
import { Box } from "@mui/material";
import { Header, Footer } from "@/components";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flex="1" px={1} py={2}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

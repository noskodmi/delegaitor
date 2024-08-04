"use client";

import React from "react";
import { Box, Container } from "@mui/material";
import { Header, Footer } from "@/components";

interface WebLayoutProps {
  children: React.ReactNode;
}

export default function WebLayout({ children }: WebLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" maxWidth="lg" sx={{ flex: 1, px: 4, py: 6 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

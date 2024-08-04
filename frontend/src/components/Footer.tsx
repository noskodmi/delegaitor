"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" py={2} mt="auto" bgcolor="primary.main" color="white">
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} My App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
export default Footer

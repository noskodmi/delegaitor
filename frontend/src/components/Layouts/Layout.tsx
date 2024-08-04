"use client"
import React from 'react';
import { useMediaQuery, useTheme } from "@mui/material";
import { MobileLayout, WebLayout } from "@/components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const LayoutComponent = isTablet ? MobileLayout : WebLayout;

  return (
    <LayoutComponent>
      {children}
    </LayoutComponent>
  );
};

export default Layout;

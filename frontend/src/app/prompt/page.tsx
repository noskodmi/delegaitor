"use client";
import React from "react";
import { WalletAccessControl, PromptForm } from "@/components";

const PromptSetup: React.FC = () => {
  return (
    <WalletAccessControl>
      <PromptForm />
    </WalletAccessControl>
  );
};

export default PromptSetup;

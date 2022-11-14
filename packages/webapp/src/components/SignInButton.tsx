import { Button } from "@mui/material";
import React from "react";
import { useNear } from "../wallet/nearHooks";

type SignInButtonProps = {
  children: string;
};

export const SignInButton = ({ children }: SignInButtonProps) => {
  const { wallet } = useNear();
  // TODO: add contractId and methodNames
  const signIn = () => wallet?.requestSignIn({
    contractId: process.env.CONTRACT_NAME,
    methodNames: ["ft_balance_of"],
  });

  return wallet?.isSignedIn() ? (
    <p>{wallet.getAccountId()}</p>
  ) : (
    <Button variant="contained" onClick={() => signIn()}>
      {children}
    </Button>
  );
};

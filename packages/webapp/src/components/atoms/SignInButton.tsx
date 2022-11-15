import { Button, SxProps } from "@mui/material";
import React from "react";
import { useNear } from "../../wallet/nearHooks";

type SignInButtonProps = {
  children: string;
  sx?: SxProps;
};

export const SignInButton = ({ children, sx }: SignInButtonProps) => {
  const { wallet } = useNear();
  // TODO: add contractId and methodNames
  const signIn = () => wallet?.requestSignIn({
    contractId: process.env.CONTRACT_NAME,
    methodNames: ["ft_balance_of"],
  });

  return wallet?.isSignedIn() ? (
    <p>{wallet.getAccountId()}</p>
  ) : (
    <Button sx={sx} variant="contained" onClick={() => signIn()}>
      {children}
    </Button>
  );
};

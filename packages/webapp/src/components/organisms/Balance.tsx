import Typography from "@mui/material/Typography";
import * as React from "react";
import { useContract, useNear } from "../../wallet/nearHooks";
import { utils } from "near-api-js";
import { SxProps } from "@mui/material";

type BalanceProps = {
  sx?: SxProps;
};

export const Balance = ({ sx }: BalanceProps) => {
  // Here we define the contract configuration and get a contract object.
  const contract = useContract({
    contractId: "wrap.testnet",
    contractMethods: {
      viewMethods: ["ft_balance_of"],
      changeMethods: [],
    },
  });
  // We use the `useWallet` hook to get the wallet connection object.
  const { wallet, near } = useNear();

  // Since executing smart contract methods takes time we will use a `useState` hook to
  // store the result of the method execution.
  const [balance, setBalance] = React.useState("");

  React.useEffect(() => {
    // Calling smart contract methods is an async task so we create a async function to
    // execute the method.
    async function getBalance() {
      // We check to see if an account is signed in, otherwise we cannot get a balance of an unknown account.
      if (wallet?.isSignedIn()) {
        const balance = await wallet.account().getAccountBalance();

        // We store the return value of the smart contract call in the `balance` variable.
        // const balance = await contract.ft_balance_of({
        //   account_id: wallet?.getAccountId(),
        // });
        setBalance(utils.format.formatNearAmount(balance.total, 5));
      }
    }
    getBalance().catch(console.error);
  }, [wallet, contract, near]);
  // This will display the available wNEAR balance of the currently signed in account
  return wallet?.isSignedIn() ? (
    <Typography variant="body2" fontWeight={900} sx={sx}>
      {balance} NEAR
    </Typography>
  ) : null;
};

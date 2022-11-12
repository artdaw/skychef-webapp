import * as React from "react";
import { WalletContext } from "./walletContext";

export const useWallet = (): WalletContext =>
  React.useContext<WalletContext>(WalletContext);

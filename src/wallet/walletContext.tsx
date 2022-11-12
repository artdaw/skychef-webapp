import * as React from "react";
import { NftNEAR } from "./nearInterface";

export type WalletContext = {
  near: NftNEAR | undefined;
};

export const WalletContext = React.createContext<WalletContext>({
  near: undefined,
});

export const WalletProvider = ({
  near,
  children,
}: WalletContext & { children: React.ReactNode }) => (
  <WalletContext.Provider value={{ near }}>{children}</WalletContext.Provider>
);

export const WalletConsumer = WalletContext.Consumer;

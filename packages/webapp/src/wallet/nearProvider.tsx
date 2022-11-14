import * as React from "react";
import { connect, ConnectConfig, Near, WalletConnection } from "near-api-js";

type NearContext = {
  near: Near | undefined;
  wallet: WalletConnection | undefined;
  connectConfig: ConnectConfig;
  isConnected: boolean;
};

export const NearContext = React.createContext<NearContext>({
  near: undefined,
  wallet: undefined,
  connectConfig: null,
  isConnected: false,
});

type NearProviderProps = {
  children: React.ReactNode;
  connectConfig: ConnectConfig;
};

export const NearProvider = ({
  children,
  connectConfig,
}: NearProviderProps) => {
  const [near, setNear] = React.useState<Near>(null);
  const [wallet, setWallet] = React.useState<WalletConnection>(null);

  React.useEffect(() => {
    async function connectNear() {
      const near = await connect(connectConfig);

      setNear(near);
      setWallet(new WalletConnection(near, null));
    }

    // TODO add error handling
    connectNear().catch(console.error);
  }, [connectConfig]);

  const isConnected = Boolean(near && wallet);

  return (
    <NearContext.Provider value={{ near, wallet, connectConfig, isConnected }}>
      {children}
    </NearContext.Provider>
  );
};

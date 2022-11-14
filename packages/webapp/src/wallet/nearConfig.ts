import { ConnectConfig, keyStores } from "near-api-js";

export const createConfig = (networkId = "testnet"): ConnectConfig => ({
  headers: null,
  networkId,
  nodeUrl: `https://rpc.${networkId}.near.org`,
  keyStore: global.window && new keyStores.BrowserLocalStorageKeyStore(),
  walletUrl: `https://wallet.${networkId}.near.org`,
  helperUrl: `https://helper.${networkId}.near.org`,
});

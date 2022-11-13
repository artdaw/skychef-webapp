import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { theme } from "../theme";
import createEmotionCache from "../theme/createEmotionCache";
import { Wallet } from "../wallet/nearWallet";
import { NftNEAR } from "../wallet/nearInterface";
import { WalletProvider } from "../wallet/walletContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });

// Abstract the logic of interacting with the contract to simplify your flow
const nftNEAR = new NftNEAR({
  contractId: process.env.CONTRACT_NAME || "",
  wallet,
});

export default function App(props: AppProps) {
  // @ts-ignore
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <WalletProvider near={nftNEAR}>
          <Component {...pageProps} />
        </WalletProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

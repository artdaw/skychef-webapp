import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useNear } from "../wallet/nearHooks";
import { NavBar } from "../components/organisms/NavBar";
import { LandingPageBody } from "../components/organisms/LandingPageBody";
import { SearchFormBody } from "../components/organisms/SearchFormBody";

export default function Home() {
  const { wallet } = useNear();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Skychef</title>
        <meta name="description" content="Nfticket service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        avatar={wallet?.getAccountId()}
        isLogged={wallet?.isSignedIn()}
        router={router}
        onLogOut={() => wallet.signOut()}
      />
      <LandingPageBody isLogged={wallet?.isSignedIn()} />
      <SearchFormBody
        isLogged={wallet?.isSignedIn()}
        walletName={wallet?.getAccountId()}
        router={router}
      />
    </>
  );
}

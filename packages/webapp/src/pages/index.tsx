import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import { useNear } from "../wallet/nearHooks";
import { SignInButton } from "../components/atoms/SignInButton";
import { Balance } from "../components/organisms/Balance";
import { NavBar } from "../components/organisms/NavBar";
import { LandingPageBody } from "../components/organisms/LandingPageBody";

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
      {wallet?.isSignedIn() && (
        <Container maxWidth="sm" sx={{ marginTop: "4em" }}>
          <Grid container>
            <Grid item>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={900}
                sx={{ color: "#fff" }}
              >
                Hello {wallet.getAccountId()} 👋
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

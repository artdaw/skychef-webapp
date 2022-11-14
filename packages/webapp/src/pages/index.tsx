import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import { useNear } from "../wallet/nearHooks";
import { SignInButton } from "../components/SignInButton";
import { Balance } from "../components/Balance";
import skychefLogo from "../../public/skychef_logo.png";

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
      <Container maxWidth="sm">
        <Grid container justifyContent="center">
          <Grid item sx={{ marginTop: "4em", marginBottom: "2em" }}>
            <Image alt="Skychef Logo" src={skychefLogo} width={139} />
          </Grid>
          <Grid item sx={{ marginBottom: "8em" }}>
            <Typography variant="h5" gutterBottom>
              A new NFTicket service
            </Typography>
          </Grid>
          <Grid item>
            {!wallet?.isSignedIn() && (
              <SignInButton>Sing in with NEAR</SignInButton>
            )}
            {wallet?.isSignedIn() && (
              <Stack spacing={2}>
                <Typography variant="body1" gutterBottom>
                  Hello {wallet.getAccountId()} 👋
                </Typography>
                <Balance />
                <Button
                  variant="contained"
                  onClick={() => {
                    wallet.signOut();
                    router.push("/");
                  }}
                >
                  Logout
                </Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

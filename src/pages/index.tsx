import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useWallet } from "../wallet/walletHook";
import { Button } from "@mui/material";

export default function Home() {
  const { near } = useWallet();
  const [isSignedIn, setIsSigned] = React.useState<boolean | undefined>(false);

  React.useEffect(() => {
    async function initWallet() {
      const signed = await near?.wallet.startUp();
      setIsSigned(signed)
    }
    initWallet();
  });

  return (
    <>
      <Head>
        <title>Skychef</title>
        <meta name="description" content="Nfticket service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            Skychef 🎟️
          </Typography>
          <Typography variant="h5" gutterBottom>
            A new NFTicket service
          </Typography>
          {!isSignedIn && (
            <Button variant="contained" onClick={() => near?.wallet.signIn()}>
              Login using NEAR Wallet
            </Button>
          )}
          {isSignedIn && (
            <>
              <Typography variant="body1" gutterBottom>
                Hello {near?.wallet.accountId} 👋
              </Typography>
              <Button
                variant="contained"
                onClick={() => near?.wallet.signOut()}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}

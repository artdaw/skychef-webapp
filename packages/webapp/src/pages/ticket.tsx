import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useNear } from "../wallet/nearHooks";
import { NavBar } from "../components/organisms/NavBar";
import { LandingPageBody } from "../components/organisms/LandingPageBody";
import { SearchFormBody } from "../components/organisms/SearchFormBody";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Toast } from "../components/atoms/Toast";

export default function Ticket() {
  const { wallet } = useNear();
  const router = useRouter();
  const [toastOpen, setToastOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Skychef – Select Ticket</title>
        <meta name="description" content="Nfticket select ticket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        avatar={wallet?.getAccountId()}
        isLogged={wallet?.isSignedIn()}
        router={router}
        onLogOut={() => wallet.signOut()}
      />
      <Container maxWidth="sm" sx={{ marginTop: "4em" }}>
        <Grid container>
          <Grid item>
            <Typography
              variant="h4"
              component="h1"
              fontWeight={900}
              sx={{ marginBottom: "2em" }}
            >
              Hello {wallet?.getAccountId()} 👋
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "1em" }}
            >
              1 direct flight
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      09:00am
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{ fontSize: 14, textAlign: "right" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      10:00am
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h5">OPO</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontSize: 14, textAlign: "center" }}
                      color="text.secondary"
                    >
                      –– 1h 00min ––
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="h5">LIS</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography color="text.secondary">Web3Air</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      color="text.secondary"
                      sx={{ textAlign: "right" }}
                    >
                      41,99 EUR
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "2em" }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => setToastOpen(true)}
            >
              Buy Ticket
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Toast
        severity="warning"
        open={toastOpen}
        onClose={() => setToastOpen(false)}
      >
        Work in progress. Stay tuned!
      </Toast>
    </>
  );
}

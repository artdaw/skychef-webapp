import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { SignInButton } from "../atoms/SignInButton";

type LandingPageBodyProps = {
  isLogged: boolean;
};

export const LandingPageBody = ({ isLogged = false }: LandingPageBodyProps) =>
  !isLogged && (
    <Container maxWidth="sm" sx={{ marginTop: "4em" }}>
      <Grid container justifyContent="center">
        <Grid item columns={{ xs: 12 }}>
          <Typography
            variant="h1"
            fontWeight={800}
            sx={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            A new NFTicket service
          </Typography>
        </Grid>
        <Grid item columns={{ xs: 12 }} sx={{ marginBottom: "8em" }}>
          <Typography
            variant="body1"
            color="GrayText"
            sx={{
              color: "#D9D9D9",
              textAlign: "center",
            }}
          >
            Buy, swap, sell, leverage all on one decentralized, community driven
            platform. Fly anywhere with NFTickets service.
          </Typography>
        </Grid>
        <Grid item>
          <SignInButton
            sx={{
              background:
                "linear-gradient(269.96deg, #DB2777 16.92%, #2563EB 75.68%);",
            }}
          >
            Sing in with NEAR
          </SignInButton>
        </Grid>
      </Grid>
    </Container>
  );

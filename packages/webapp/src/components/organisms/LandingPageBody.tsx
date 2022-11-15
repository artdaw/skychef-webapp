import * as React from "react";
import Image from "next/image";
import { Container, Grid, Typography, Box } from "@mui/material";
import JoinRightIcon from "@mui/icons-material/JoinRight";
import { SignInButton } from "../atoms/SignInButton";
import NFTicket from "../../../public/NFTicket.png";

type LandingPageBodyProps = {
  isLogged: boolean;
};

export const LandingPageBody = ({ isLogged = false }: LandingPageBodyProps) =>
  !isLogged && (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "4em" }}>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item columns={{ xs: 12 }}>
            <Typography
              variant="h1"
              fontWeight={800}
              sx={{
                marginBottom: "1em",
                textShadow:
                  "0 0 64px rgb(192 219 255 / 48%), 0 0 16px rgb(65 120 255 / 24%)",
              }}
            >
              A new NFTicket service
            </Typography>
          </Grid>
          <Grid item columns={{ xs: 12 }} sx={{ marginBottom: "8em" }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#94a3b8",
              }}
            >
              Buy, swap, sell, leverage all on one decentralized, community
              driven platform.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#94a3b8",
                marginBottom: "2em",
              }}
            >
              Fly anywhere with NFTickets service.
            </Typography>
            <Image src={NFTicket} alt="NFTicket" width="200" />
          </Grid>
        </Grid>
      </Container>
      <Box
        component="footer"
        sx={{ padding: "2em 0", background: "#04070D", textAlign: "center" }}
      >
        <JoinRightIcon />
        <Typography variant="h5" fontWeight={800}>
          Join the waitlist
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#94a3b8", marginBottom: "3em" }}
        >
          Be the first to use the NFTicket
        </Typography>
        <SignInButton
          sx={{
            background:
              "linear-gradient(269.96deg, #DB2777 16.92%, #20A4F3 75.68%);",
          }}
        >
          Sing in with NEAR
        </SignInButton>
      </Box>
    </>
  );

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SkychefLogo from "../../../public/skychef_logo_white.png";
import Image from "next/image";
import { NextRouter } from "next/router";
import { SignInButton } from "../atoms/SignInButton";
import { Balance } from "./Balance";
import { Divider } from "@mui/material";
import Link from "next/link";

const settings = ["Logout"];

type NavBarProps = {
  isLogged?: boolean;
  avatar?: string;
  router?: NextRouter;
  onLogOut?: () => void;
};

export const NavBar = ({
  avatar = "",
  isLogged = false,
  router,
  onLogOut,
}: NavBarProps) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    onLogOut();
    router.push("/");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ paddingTop: "1em" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link href="/">
              <Image src={SkychefLogo} alt="Skychef logo" width={139} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Link href="/">
              <Image src={SkychefLogo} alt="Skychef logo" width={139} />
            </Link>
          </Box>
          {!isLogged && (
            <Box sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }}>
              <SignInButton>Sign in</SignInButton>
            </Box>
          )}
          {isLogged && (
            <Box sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>{avatar[0]}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", width: "320px!important" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Balance sx={{ padding: "1em" }} />
                <Divider />
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

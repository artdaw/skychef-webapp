import { Inter } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import shadows, { Shadows } from "@mui/material/styles/shadows";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Lato", "Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      background: { default: "#0F172A" },
      primary: {
        main: "#20a4f3",
        light: "#6ed5ff",
        dark: "#0F172A",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
      fontSize: 16,
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiMenu: {
        styleOverrides: {
          paper: {
            width: '220px'
          }
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            background:
              "linear-gradient(146.68deg, #20A4F3 18.72%, #2074F3 80.17%)",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "10px",
          },
        },
      },
    },
  })
);

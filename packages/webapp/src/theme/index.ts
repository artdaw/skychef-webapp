import { Inter } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import shadows, { Shadows } from "@mui/material/styles/shadows";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Lato", "Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
export const theme = createTheme({
  shadows: shadows.map(() => "none") as Shadows,
  palette: {
    primary: {
      main: "#20a4f3",
      light: "#6ed5ff",
      dark: "#0076c0",
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
});

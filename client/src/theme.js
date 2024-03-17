import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F80ED",
      dark: "#475993",
    },
    secondary: {
      main: "#F2994A",
      light: "#FCEFCA",
      dark: "#F2C94C",
    },
    success: {
      main: "#219653",
      light: "#85E0AB",
    },
    error: {
      main: "#EB5757",
    },
    grey: {
      100: "#F2F2F2",
      300: "#E0E0E0",
      500: "#4F4F4F",
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      "SF Pro Display",
      "Noto Sans Display",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "0.02rem",
    },
    h2: {
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      letterSpacing: "0.0225rem",
    },
    h3: {
      color: "#181818",
      fontSize: "0.9rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      letterSpacing: "0.01rem",
    },
    h4: {
      color: "#FFF",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "0.02rem",
    },
    h5: {
      color: "#FFF",
      fontSize: "0.8125rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.125rem",
      letterSpacing: "0.01625rem",
    },
    subtitle1: {
      color: "var(--Gray-2, #4F4F4F)",
      fontSize: "0.8125rem", // 13px
      fontStyle: "normal",
      fontWeight: 500,
      letterSpacing: "0.01625rem",
    },
    subtitle2: {
      color: "var(--Gray-2, #4F4F4F)",
      fontSize: "0.8125rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.1375rem",
      letterSpacing: "0.01625rem",
    },
  },
});

export default theme;

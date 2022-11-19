import { createTheme, css, PaletteOptions } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "light";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#191920",
    },
    primary: {
      // main: "#A049E0",
      main: "#fff",
      A100: "#A8ADC1",
      A200: "#979BAD",
    },
  },
  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        outlined: {
          backgroundColor: "transparent",
          borderRadius: "12px",
        },
        elevation0: {
          backgroundColor: "transparent",
        },
        elevation1: {
          backgroundColor: "#1f212a",
          // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          fontWeight: "500",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "black",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff",
    },
    primary: {
      // main: "#A049E0",
      main: "#111",
      A100: "#555555",
      A200: "#707070",
    },
  },
  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        outlined: {
          backgroundColor: "transparent",
          borderRadius: "12px",
        },
        elevation0: {
          backgroundColor: "transparent",
        },
        elevation1: {
          backgroundColor: "transparent",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          fontWeight: "500",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});
darkTheme.typography.h1 = {
  fontSize: "2.4rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [darkTheme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

darkTheme.typography.h2 = {
  fontSize: "2rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
  [darkTheme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
};

darkTheme.typography.h3 = {
  fontSize: "1.8rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
  },
  [darkTheme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

darkTheme.typography.h4 = {
  fontSize: "1.3rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [darkTheme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};

darkTheme.typography.body1 = {
  fontSize: "1.3rem",
  fontFamily: "Nunito",
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [darkTheme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
};

darkTheme.typography.body2 = {
  fontSize: "1.1rem",
  fontFamily: "Nunito",
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [darkTheme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

lightTheme.typography.h1 = {
  fontSize: "2.4rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [lightTheme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

lightTheme.typography.h2 = {
  fontSize: "2rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [lightTheme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
};

lightTheme.typography.h3 = {
  fontSize: "1.8rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [lightTheme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
  },
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

lightTheme.typography.h4 = {
  fontSize: "1.3rem",
  fontFamily: "Nunito",
  fontWeight: "400",
  [lightTheme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};

lightTheme.typography.body1 = {
  fontSize: "1.3rem",
  fontFamily: "Nunito",
  [lightTheme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
};

lightTheme.typography.body2 = {
  fontSize: "1.1rem",
  fontFamily: "Nunito",
  [lightTheme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
    a {
      color: #000;
    }
    .nav-link {
      cursor: pointer;
      display: inline-block;
    }
    .nav-link::after {
      content: close-quote;
      display: block;
      width: 0;
      height: 2px;
      background: #111;
      transition: linear 0.2s;
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .nav-link:hover {
      color: #000;
      font-weight: 700;
    }
    a {
      text-decoration: none;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #191920;
      color: #fff;
    }
    .nav-link {
      cursor: pointer;
      display: inline-block;
    }
    .nav-link::after {
      content: close-quote;
      display: block;
      width: 0;
      height: 2px;
      background: #fff;
      transition: linear 0.2s;
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .nav-link:hover {
      font-weight: 700;
      color: #fff;
    }
  }
`;

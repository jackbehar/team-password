import { lineHeight } from "@mui/system";

const boilerplateTheme = {
  // To further customize this theme,
  // please see the full theme object here: https://mui.com/customization/default-theme/
  palette: {
    primary: {
      main: "#204C6A",
      light: "#507898",
      dark: "#11313E",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#63DAE5",
      light: "#9AFFFF",
      dark: "#1FA8B3",
      contrastText: "#ffffff"
    },
    background: {
      main: '#F2F5F9',
      light: "#F9F9F9",
      dark: "#DFE7EE",
      contrastText: '#fff',
    },
    text: {
      primary: "#10313e",
      secondary: "#63dae5"
    },
  },
  typography: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 15,
    h1: {
      fontWeight: "600",
      fontSize: "64px",
      lineHeight: "77px"
    },
    h2: {
      fontWeight: "700",
      fontSize: "44px",
      lineHeight: "56px"
    },
    h3: {
      fontWeight: "500",
      fontSize: "44px",
      // lineHeight: "56px"
    },
    body1: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: "700",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: 6,
        },
        text: {
          fontWeight: "500",
        },
        sizeLarge: {
          fontSize: 18,
          height: 54
        }
      },
    },
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: 6,
          "& .MuiButton-text:hover": { "background-color": "#ffffff20" }
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
        input: {
          // textAlign: "center"
        },
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#dddddd',
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#10313e',
          fontSize: '14px'
        }
      }
    },
  },
};

export default boilerplateTheme;


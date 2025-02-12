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
      contrastText: '#ffffff',
    },
    error: {
      main: "#ff1600"
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
      textTransform: "inherit",
      fontWeight: "700",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      variants: [
        {
          props: { variant: 'ghost' },
          style: {
            backgroundColor: "#5ebf9926",
            color: "#5ebf99",
            fontWeight: "bold",
            borderRadius: 0,
            height: "36px"
          },
        },
      ],
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

    MuiSwitch: {
      styleOverrides: {
        // Name of the slot
        root: {
          width: 42,
          height: 26,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              '& + .MuiSwitch-track': {
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: "#eeeeee",
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.7
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#E9E9EA',
            opacity: 1,
          },
        },
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


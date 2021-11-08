const boilerplateTheme = {
  // To further customize this theme,
  // please see the full theme object here: https://mui.com/customization/default-theme/
  palette: {
    primary: {
      main: "#1e4d6a",
      light: "#63dae5",
      dark: "#10313e",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#63dae5",
      light: "#5ebf9926",
      dark: "#47b586",
      contrastText: "#ffffff"
    },
    text:{
      primary: "#1e4d6a",
      secondary: "#63dae5"
    },
  },
  typography: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 15,
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
        text:{
          fontWeight: "500",
        }
      },
    },
  },
};

export default boilerplateTheme;


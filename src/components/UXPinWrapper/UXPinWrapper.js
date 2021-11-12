// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import teamPasswordTheme from "./team-password-theme";

const theme = createTheme(teamPasswordTheme);

export default function UXPinWrapper({ children }) {
  if (!document.getElementById("mui-merge-font")) {
    let muli = document.createElement("link");
    muli.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700"
    );
    muli.setAttribute("rel", "stylesheet");
    muli.setAttribute("id", "mui-merge-font");
    document.head.appendChild(muli);
  }
  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
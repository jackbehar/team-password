import React from 'react';
import TpAppbar from '../TpAppbar';
import Button from "../../Button/Button";
import Image from "../../Image/Image";
import Stack from "../../Stack/Stack";
import Toolbar from "../../Toolbar/Toolbar";
import Box from "../../Box/Box";

export default (
  <TpAppbar position="static" uxpId="1">
    <Toolbar uxpId="2" justifyContent="space-between">
      <Image
        alt="TeamPassword"
        height="38px"
        objectFit="contain"
        src="//d9hhrg4mnvzow.cloudfront.net/get.teampassword.com/website-redesign/9bf8a5cc-teampassword_104g00t000000000000028.png"
        width=""
        uxpId="tp-appbar-logo"
      />
      <Box sx={{ flexGrow: "1" }} uxpId="box-spacer" />
      <Stack direction="row" spacing={8} uxpId="stack">
        <Button
          variant="text"
          color="inherit"
          uxpId="button-1"
        >Plans &amp; Pricing</Button>
        <Button
          variant="text"
          color="inherit"
          uxpId="button-2"
        >Product Tour</Button>
        <Button
          variant="text"
          color="inherit"
          uxpId="button-3"
        >Blog</Button>
        <Button
          variant="text"
          color="inherit"
          uxpId="button-4"
        >Security</Button>
        <Button
          variant="text"
          color="inherit"
          uxpId="button-5"
        >Password Generator</Button>
        <Button
          variant="text"
          color="inherit"
          sx={{ "font-weight": "700 !important" }}
          uxpId="button-6"
        >Sign In</Button>
        <Button
          variant="contained"
          color="secondary"
          uxpId="button-cta"
          sx={{ "marginLeft": "16px !important" }}
        >Get Started!</Button>
      </Stack>
    </Toolbar>
  </TpAppbar>
)

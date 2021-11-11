import React from 'react';
import TpFeatureCallout from '../TpFeatureCallout';
import Box from '../../Box/Box';
import Grid from '../../Grid/Grid';
import Typography from '../../Typography/Typography';
import Image from '../../Image/Image';


export default (
  <TpFeatureCallout uxpId="tp-feature-callout-1">
    <Box
        paddingTop="105px"
        paddingRight="205px"
        paddingBottom="105px"
        paddingLeft="205px"
        sx={{ backgroundColor: '#f9f9f' }}
        uxpId="box-1"
      >

        <Grid
          container={true}
          spacing="8"
          alignItems="center"
          uxpId="grid-1"
        >
          <Grid
            item={true}
            xs="12"
            xl="6"
            uxpId="grid-1.1"
          >
            <Image
              alt="Groups and Sharing"
              width=""
              objectFit="contain"
              src="https://uc.uxpin.com/files/1207500/1164185/image-b7baf28d43ba7908db8861504eb69d21-e4ce31.png"
              height=""
              uxpId="image-1"
            />
          </Grid>
          <Grid
            item={true}
            xs="12"
            xl="6"
            uxpId="grid-1.2"
          >
            <Typography
              variant="h3"
              color="text.primary"
              marginBottom="28px"
              uxpId="typography-1"
            >
              Groups and Sharing
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              marginBottom=""
              component="h4"
              paddingRight="30px"
              paragraph={true}
              uxpId="typography-2"
            >
              Groups allow you to quickly share logins and passwords with a subset of team members, a group of external collaborators, or even the entire team. If a team member no longer needs access, they can be removed from the group with a single click.
            </Typography>
          </Grid>
        </Grid>
      </Box>
  </TpFeatureCallout>
);

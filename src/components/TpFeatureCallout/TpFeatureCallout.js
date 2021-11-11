import React from "react";
import PropTypes from "prop-types";
import Box from '../Box/Box';
import Grid from '../Grid/Grid';
import Typography from '../Typography/Typography';
import Image from '../Image/Image';

function TpFeatureCallout(props) {
    //const { uxpinRef, ...other } = props;
    return (
      <Box>
       {props.children}
       </Box>
    )
  }
  TpFeatureCallout.propTypes = {
    /**
     * The typography style to apply.
     */
    children: PropTypes.node,
  }

  export default TpFeatureCallout;


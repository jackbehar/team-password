import React from 'react';
import PropTypes from 'prop-types';
import IconM from '@mui/material/Icon';
import { iconVariants } from './icon-variants'
import { paletteColors } from '../UXPinWrapper/colors'

let icons = document.createElement('link');
icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
icons.setAttribute('rel', 'stylesheet');
document.head.appendChild(icons);


function Icon (props) {
    return <IconM {...props} sx={{ color: props.color}} >{props.children}</IconM>
}

Icon.propTypes = {
  /**
   * The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   * @uxpinpropname  Icon
   */
  children: PropTypes.oneOf(iconVariants),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(paletteColors),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @uxpinpropname Size
   */
  fontSize: PropTypes.oneOf(['large', 'medium', 'small', 'inherit']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}



Icon.defaultProps = {
  // fontSize: "large"
}


export default Icon;
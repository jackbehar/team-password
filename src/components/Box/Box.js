import React from 'react';
import PropTypes from 'prop-types';
import { Box as BoxM, ThemeProvider } from '@mui/system';
import { paletteColors } from '../UXPinWrapper/colors'

/**
 * @uxpinwrappers
 * NonResizableWrapper
 */
function Box(props) {

  const commonStyles = {
    borderTopColor: props.borderColor,
    borderRightColor: props.borderColor,
    borderBottomColor: props.borderColor,
    borderLeftColor: props.borderColor,
    textDecoration: props.textDecoration
  };

  const { uxpinRef, ...other } = props;

  return (
    <ThemeProvider
      theme={{
        spacing: 1,
      }}
    >
      <div style={{display: "table"}} ref={uxpinRef} >
      <BoxM sx={{ ...commonStyles }} {...props} >{props.children}</BoxM>
      </div>
    </ThemeProvider>
  );
}


Box.propTypes = {

  width: PropTypes.number,

  height: PropTypes.number,

  bgcolor: PropTypes.oneOf(paletteColors),

  /** @uxpinignoreprop */
  padding: PropTypes.number,

  paddingTop: PropTypes.number,

  paddingRight: PropTypes.number,

  paddingBottom: PropTypes.number,

  paddingLeft: PropTypes.number,

  /** @uxpinignoreprop */
  margin: PropTypes.number,

  marginTop: PropTypes.number,

  marginRight: PropTypes.number,

  marginBottom: PropTypes.number,

  marginLeft: PropTypes.number,

  border: PropTypes.oneOf(['solid', 'dashed', 'dotted']),

  borderColor: PropTypes.oneOf(paletteColors),

  borderTop: PropTypes.number,

  borderRight: PropTypes.number,

  borderBottom: PropTypes.number,

  borderLeft: PropTypes.number,

  borderRadius: PropTypes.number,

  boxShadow: PropTypes.number,

  /** @uxpinignoreprop */
  displayPrint: PropTypes.string,

  typography: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "inherit"
  ]),

  color: PropTypes.oneOf(paletteColors),

  fontFamily: PropTypes.string,

  fontSize: PropTypes.number,

  fontStyle: PropTypes.oneOf([
    "normal",
    "italic",
    "oblique",
  ]),

  fontWeight: PropTypes.oneOf([
    "light",
    "medium",
    "normal",
    "bold",
    "900",
  ]),

  letterSpacing: PropTypes.number,

  lineHeight: PropTypes.number,

  textAlign: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  textDecoration: PropTypes.oneOf([
    "underline",
    "overline",
    "line-through"
  ]),

  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow-root']),
  
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),

  alignContent: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),

  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline"
  ]),

  alignSelf: PropTypes.oneOf([
    "stretch",
    "center",
    "start",
    "end",
  ]),

  /** @uxpinignoreprop */
  flex: PropTypes.string,

  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),

  flexWrap:  PropTypes.oneOf([
    "nowrap",
    "wrap",
    "wrap-reverse"
  ]),

  flexGrow: PropTypes.number,

  flexShrink: PropTypes.number,

  order: PropTypes.number,

  gap: PropTypes.number,

  /** @uxpinignoreprop */
  columnGap: PropTypes.number,

  /** @uxpinignoreprop */
  rowGap: PropTypes.number,

  /** @uxpinignoreprop */
  gridColumn: PropTypes.string,

  /** @uxpinignoreprop */
  gridRow: PropTypes.string,

  /** @uxpinignoreprop */
  gridAutoFlow: PropTypes.string,

  /** @uxpinignoreprop */
  gridAutoColumns: PropTypes.string,

  /** @uxpinignoreprop */
  gridAutoRows: PropTypes.string,

  /** @uxpinignoreprop */
  gridTemplateColumns: PropTypes.string,

  /** @uxpinignoreprop */
  gridTemplateRows: PropTypes.string,

  /** @uxpinignoreprop */
  gridTemplateAreas: PropTypes.string,

  /** @uxpinignoreprop */
  gridArea: PropTypes.string,



  position: PropTypes.oneOf([
    "static",
    "relative",
    "absolute",
    "fixed",
    "sticky",
  ]),

  top: PropTypes.number,

  right: PropTypes.number,

  bottom: PropTypes.number,

  left: PropTypes.number,

  zIndex: PropTypes.string,

  /** @uxpinignoreprop */
  maxHeight: PropTypes.string,

  /** @uxpinignoreprop */
  maxWidth: PropTypes.string,

  /** @uxpinignoreprop */
  minHeight: PropTypes.string,

  /** @uxpinignoreprop */
  minWidth: PropTypes.string,

  /** @uxpinignoreprop */
  boxSizing: PropTypes.string,

  /** @uxpinignoreprop */
  mx: PropTypes.string,

  /** @uxpinignoreprop */
  my: PropTypes.string,

  /** @uxpinignoreprop */
  marginInline: PropTypes.string,

  /** @uxpinignoreprop */
  marginInlineStart: PropTypes.string,

  /** @uxpinignoreprop */
  marginInlineEnd: PropTypes.string,

  /** @uxpinignoreprop */
  marginBlock: PropTypes.string,

  /** @uxpinignoreprop */
  marginBlockStart: PropTypes.string,

  /** @uxpinignoreprop */
  marginBlockEnd: PropTypes.string,

  /** @uxpinignoreprop */
  px: PropTypes.string,

  /** @uxpinignoreprop */
  py: PropTypes.string,

  /** @uxpinignoreprop */
  paddingInline: PropTypes.string,

  /** @uxpinignoreprop */
  paddingInlineStart: PropTypes.string,

  /** @uxpinignoreprop */
  paddingInlineEnd: PropTypes.string,

  /** @uxpinignoreprop */
  paddingBlock: PropTypes.string,

  /** @uxpinignoreprop */
  paddingBlockStart: PropTypes.string,

  /** @uxpinignoreprop */
  paddingBlockEnd: PropTypes.string,

  sx: PropTypes.object,

  /** @uxpinignoreprop */
  children: PropTypes.node,
};


export default Box;
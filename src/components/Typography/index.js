import React from "react";
import PropTypes from "prop-types";
import { Component } from "./styles";

const Typography = ({ component, styles, ...props }) => (
  <Component as={component} styles={styles} {...props} />
);

Typography.propTypes = {
  component: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "p",
    "label",
  ]),
  styles: PropTypes.object,
};

Typography.defaultProps = {
  component: "p",
  styles: {},
};

export default Typography;

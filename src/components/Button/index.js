import React from "react";
import PropTypes from "prop-types";
import "../../styles.css";

const Button = ({ shape, size }) => <button className={shape + " " + size}>{shape}-{size}</button>;

Button.defaultProps = {
  shape: "rectangle"
};

Button.defaultProps = {
  size: "medium"
};

export default Button;
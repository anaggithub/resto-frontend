import React from "react";
import { StyledButton } from "./styles"

function Button({ classes, onClick, children, variant }) {
  return (
    <StyledButton
      addCSS={classes}
      variant={variant}
      onClick={onClick} >
      {children}
    </StyledButton >
  );
}

export default Button

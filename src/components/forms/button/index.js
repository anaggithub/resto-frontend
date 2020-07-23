import React from "react";
import { StyledButton } from "./styles"

function Button({ styles, onClick, children, variant }) {
  return (
    <StyledButton
      styles={styles}
      variant={variant}
      onClick={onClick} >
      {children}
    </StyledButton >
  );
}

export default Button

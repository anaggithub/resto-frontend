import React from "react";
import { StyledButton } from "./styles";

const Button = ({ styles, onClick, children, variant }) => (
  <StyledButton styles={styles} variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;

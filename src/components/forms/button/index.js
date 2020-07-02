import React from "react";
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
text-decoration: none;
cursor: pointer;
border-radius: 5px;
padding: 0.5rem 0.7rem;
transition: opacity 0.6s ease-in-out;
font-size: 12px;
font-weight: 700;
color: #FF8C69;
background-color:white;
border: solid 1.3px #FF8C69;
&:hover {
  opacity: 0.6;
}
${props => props.addCSS}
${({ variant }) => variants[variant]}
`;

const variants = {
  primary: css`
    background-color: #FF8C69;
    color:white;
  `,
  secondary: css`
    /* background-color:white; */
  `,
  special: css`
    border:none;
     `
}
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

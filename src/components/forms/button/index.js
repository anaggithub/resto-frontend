import React from "react";
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
text-decoration: none;
cursor: pointer;
border-radius: 25px;
padding: 0.7rem 2.4rem;
transition: opacity 0.6s ease-in-out;
color: #FF8C69;
background-color:white;
border: solid 1.3px #FF8C69;
margin: 0.2rem;
font-size:12px;
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
  font-size:11px;
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

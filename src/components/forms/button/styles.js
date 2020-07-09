import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
text-decoration: none;
cursor: pointer;
outline:none;
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

export const variants = {
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
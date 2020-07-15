import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
font-size: 1rem;
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
@media screen and (min-width: 768px) { 
  font-size: 14px;
}
/* ${props => props.addCSS} */
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
    /* font-size:11px; */
    border:none;
     `,
  add: css`
    background-color: #FF8C69;
    color:white;
    padding:0;   
    border-radius: 100%; 
    width: 50px;
    height: 50px;
    outline: 0;
    `
}
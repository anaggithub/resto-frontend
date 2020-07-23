import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
font-size: 1rem;
text-decoration: none;
cursor: pointer;
outline:none;
border-radius: 25px;
padding: 0.7rem 2.4rem;
transition: opacity 0.6s ease-in-out;
border: solid 1.3px #FF8C69;
margin: 0.2rem;
font-size:12px;
&:hover {
  opacity: 0.6;
}
@media screen and (min-width: 768px) { 
  font-size: 14px;
}
${({ styles }) => styles}
${({ variant }) => variants[variant]}
`;

export const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.buttonOrange};
    color:${({ theme }) => theme.colors.white};;
  `,
  secondary: css`
   background-color:${({ theme }) => theme.colors.white};;
  `,
  special: css`
  color: ${({ theme }) => theme.colors.buttonOrange};
    background-color:${({ theme }) => theme.colors.white};;
    border:none;
     `,
  addItem: css`
    background-color:${({ theme }) => theme.colors.buttonOrange};
    color:${({ theme }) => theme.colors.white};;
    padding:0;   
    border-radius: 100%; 
    width: 45px;
    height: 45px;
    outline: 0;
    `
}
import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
width: 100%;
background-color:pink;
${props => props.addCSS}
`
export const Copyrights = styled.div`
background-color:red;
margin: 0px;
display: flex;
align-items: center;
`

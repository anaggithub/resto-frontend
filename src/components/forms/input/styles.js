import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
/* ${props => props.addCSS} */
`
export const Row = styled.div`
padding: 5px 15px;
display: flex;
flex-direction:column;
width: 100%;
`
export const ErrorRow = styled.div`
display: flex;
width: 100%;
height: 40px;
padding: 5px 15px;
`
export const Label = styled.label`
width: 100%;
margin-bottom:10px;
padding-left:5px;
`
export const StyledInput = styled.input`
width: 100%;
outline: none;
border: 1px solid #c9c9c9;
border-radius: 3px;
padding: 10px;
color:grey;
/* background: papayawhip; */
::placeholder {
  color: palevioletred;
}
/* ${props => props.addCSS} */
`
export const ErrorMessage = styled.p`
padding-left:5px;
`
export const errorClass = css`
border: solid 1.5px #d80026;
border: solid 1.5px #FF8C69;
`;

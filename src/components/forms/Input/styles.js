import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
${({ styles }) => styles}
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
padding: 1px 15px 5px 15px;
`
export const Label = styled.label`
width: 100%;
margin-bottom:10px;
padding-left:5px;
`
export const StyledInput = styled.input`
width: 100%;
outline: none;
border: 1px solid ${({ theme }) => theme.colors.inputBorder};
border-radius: 3px;
padding: 10px;
color: ${({ theme }) => theme.colors.primary};
/* background:  ${({ theme }) => theme.colors.papayawhip}; */
::placeholder {
  color: ${({ theme }) => theme.colors.paleviolet};
}
${({ styles }) => styles}
`
export const ErrorMessage = styled.p`
padding-left:5px;
`
export const errorClass = css`
border: solid 3px ${({ theme }) => theme.colors.red};;
`;

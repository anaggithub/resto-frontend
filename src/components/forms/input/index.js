import React from "react";
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
${props => props.addCSS}
`
const Row = styled.div`
padding: 5px 15px;
display: flex;
flex-direction:column;
width: 100%;
`
const ErrorRow = styled.div`
display: flex;
width: 100%;
height: 40px;
padding: 5px 15px;
`
const Label = styled.label`
width: 100%;
margin-bottom:10px;
padding-left:5px;
`
const Input = styled.input`
width: 100%;
outline: none;
border: 1px solid #c9c9c9;
border-radius: 3px;
font-size: 15px;
padding: 10px;
background: papayawhip;
::placeholder {
  color: palevioletred;
}
${props => props.addCSS}
`
const ErrorMessage = styled.p`
padding-left:5px;
`
const errorClass = css`
border: solid 1.5px #d80026;
`;

function InputBox({ name, type, placeholder, onChange, error, errorMessage, classes, labelText }) {
    return (
        <InputContainer addCSS={classes}>
            <Row>
                <Label>{labelText}</Label>
                <Input
                    addCSS={error ? errorClass : ""}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </Input>
            </Row>
            <ErrorRow>
                {error && <ErrorMessage>{`${errorMessage}`}</ErrorMessage>}
            </ErrorRow>
        </InputContainer>
    );
}

export default InputBox
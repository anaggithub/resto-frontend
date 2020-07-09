import React from "react";
import { InputContainer, Row, Label, StyledInput, ErrorRow, ErrorMessage, errorClass } from "./styles"

function Input({ name, type, placeholder, onChange, error, errorMessage, classes, labelText }) {
    return (
        <InputContainer addCSS={classes}>
            <Row>
                <Label>{labelText}</Label>
                <StyledInput
                    addCSS={error ? errorClass : ""}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </StyledInput>
            </Row>
            <ErrorRow>
                {error && <ErrorMessage>{`${errorMessage}`}</ErrorMessage>}
            </ErrorRow>
        </InputContainer>
    );
}

export default Input
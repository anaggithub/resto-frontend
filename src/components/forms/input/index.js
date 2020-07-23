import React from "react";
import { InputContainer, Row, Label, StyledInput, ErrorRow, ErrorMessage, errorClass } from "./styles"

function Input({ name, type, placeholder, maxLength, minLength, autoComplete, onChange, error, errorMessage, styles, labelText }) {
    return (
        <InputContainer styles={styles}>
            <Row>
                <Label>{labelText}</Label>
                <StyledInput
                    styles={error ? errorClass : ""}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    maxLength={maxLength}
                    minLength={minLength}
                    autoComplete={autoComplete}
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
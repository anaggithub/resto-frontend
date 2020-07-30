import React from "react";
import PropTypes from "prop-types";
import {
  InputContainer,
  Row,
  Label,
  StyledInput,
  ErrorRow,
  ErrorMessage,
  errorClass,
} from "./styles";

const Input = ({
  labelText,
  name,
  value,
  type,
  placeholder,
  maxLength,
  minLength,
  autoComplete,
  onChange,
  error,
  errorMessage,
  styles,
}) => (
  <InputContainer styles={styles}>
    <Row>
      <Label>{labelText}</Label>
      <StyledInput
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete={autoComplete}
        onChange={onChange}
        styles={error ? errorClass : ""}
      ></StyledInput>
    </Row>
    <ErrorRow>
      {error && <ErrorMessage>{`${errorMessage}`}</ErrorMessage>}
    </ErrorRow>
  </InputContainer>
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  autoComplete: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  styles: PropTypes.object,
};

Input.defaultProps = {
  name: "",
  type: "",
  placeholder: "",
  maxLength: "",
  minLength: "",
  autoComplete: "",
  labelText: "",
  errorMessage: "",
  styles: {},
};

export default Input;

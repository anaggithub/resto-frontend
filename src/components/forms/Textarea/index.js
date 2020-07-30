import React from "react";
import "./index.scss";

const TextArea = ({
  text,
  name,
  placeholder,
  onChange,
  error,
  errorMessage,
}) => (
  <div className="textarea">
    <div className="textarea--row">
      <label className="textarea--row--label">{text}</label>
      <textarea
        className={`textarea--row--textarea ${error ? "errorClass" : ""}`}
        name={name}
        onChange={onChange}
      >
        {placeholder}
      </textarea>
    </div>
    <div className="textarea--row">
      {error && (
        <p className="textarea--row--error">{`Ingrese un ${errorMessage} válido!`}</p>
      )}
    </div>
  </div>
);

export default TextArea;

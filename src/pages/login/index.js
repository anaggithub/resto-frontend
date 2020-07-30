import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
import Input from "../../components/forms/input";
import Button from "../../components/forms/button";
import Spinner from "../../components/loading-spinner";
import { Form, InputsBox, ButtonsBox, SpinnerBox } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/login";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [isLoading, setLoading] = useState(false);
  const loading = useSelector((state) => state.login.isLoading);
  const isAdmin = useSelector((state) => state.login.isAdmin);

  function handleUserChange(e) {
    setUser(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserError(false);
    setPasswordError(false);

    let letters = /^[A-Za-z ]+$/;
    if (!user || user.trim() === "") {
      setUserErrorMessage("Ingrese un usuario");
      setUserError(true);
    } else if (!password || password.trim() === "") {
      setPasswordErrorMessage("Ingrese una contraseña");
      setPasswordError(true);
    } else if (!user.match(letters)) {
      setUserErrorMessage("Solo se aceptan letras.");
      setUserError(true);
    } else {
      dispatch(login(user, password));
    }
  }

  useEffect(() => {
    if (isAdmin === true) {
      console.log("entro al admin true");
      history.push("/dashboard");
    } else if (isAdmin === false) {
      console.log(isAdmin);
      console.log("entro al admin false");
      history.push("/home");
    }
  }, [isAdmin]);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return (
    <DefaultLayout>
      <Form method="get" onSubmit={handleSubmit}>
        <InputsBox>
          <Input
            name="user"
            type="text"
            labelText="Usuario o correo electrónico"
            value={user}
            onChange={handleUserChange}
            error={userError}
            errorMessage={userErrorMessage}
            maxLength="30"
            autoComplete="on"
          ></Input>
          <SpinnerBox>{isLoading && <Spinner />}</SpinnerBox>
          <Input
            name="password"
            type="password"
            labelText="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            errorMessage={passwordErrorMessage}
            maxLength="10"
            autoComplete="on"
          ></Input>
        </InputsBox>
        <ButtonsBox>
          <Button variant="primary">INICIAR SESION</Button>
          <Button variant="special">REGISTRARSE</Button>
        </ButtonsBox>
      </Form>
    </DefaultLayout>
  );
};

export default Login;

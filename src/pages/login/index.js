import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
import Input from "../../components/forms/input";
import Button from "../../components/forms/button";
import Spinner from "../../components/loading-spinner"
import { Form, InputsBox, ButtonsBox, SpinnerBox } from "./styles"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/login";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [userError, setUserError] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState("");
  // const { passwordError, setPasswordError } = useState(false);
  // const { passwordErrorMessage, setPasswordErrorMessage } = useState("");
  const [isLoading, setLoading] = useState(false);

  const loading = useSelector(state => state.login.isLoading);
  const isAdmin = useSelector(state => state.login.isAdmin);

  function handleUserChange(e) {
    setUser(e.target.value)
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login());

    //let letters = /^[A-Za-z ]+$/;
    // if (!user || user.trim() === "") {
    //   setUserErrorMessage("Ingrese un usuario");
    //   setUserError(true);
    // }
    // // else if (!search.match(letters)) {
    // //   setSearchErrorMessage("Solo se aceptan letras.");
    // //   setSearchError(true);
    // //} 
    // else {
    // }
  }

  useEffect(() => {
    if (isAdmin === true) {
      console.log("entro al admin true")
      history.push('/dashboard');
    }
    else if (isAdmin === false) {
      console.log(isAdmin)
      console.log("entro al admin false")
      history.push('/home');
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
            onChange={handleUserChange}
            error={userError}
            errorMessage={userErrorMessage}>
          </Input>
          <SpinnerBox>
            {isLoading && <Spinner />}
          </SpinnerBox>
          <Input
            name="password"
            type="text"
            labelText="Contraseña"
            onChange={handlePasswordChange}>
          </Input>
        </InputsBox>

        <ButtonsBox>
          <Button variant="primary" addCSS={"margin:10px;"}>INICIAR SESION</Button>
          <Button variant="special" addCSS={"margin:10px;"}>REGISTRARSE</Button>
        </ButtonsBox>

      </Form>
    </DefaultLayout>
  );
};

export default Login;

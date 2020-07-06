import React, { useState } from "react";
import DefaultLayout from "../../components/layout";
import Input from "../../components/forms/input";
import Button from "../../components/forms/button";
import { Form, InputsBox, ButtonsBox } from "./styles"
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
  const auth = useSelector(state => (state))
  console.log(auth)

  function handleUserChange(e) {
    setUser(e.target.value)
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login());
    const isAdmin = useSelector(state => state.login.isAdmin)
    isAdmin ? history.push('/dashboard') : history.push('/home')

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

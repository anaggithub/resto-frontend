import React, { useState } from "react";
import DefaultLayout from "../../components/layout";
import Input from "../../components/forms/input";
import Button from "../../components/forms/button";
import { setToken } from "../../helpers/auth-helper.js"
import Axios from "axios"
import styled from 'styled-components';

const Form = styled.form`
width:100%;
flex-grow: 1;
display:flex;
flex-direction:column;
`;
const InputsBox = styled.div`
padding-top:2rem;
flex-grow:1;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:flex-start;
/* background-color: pink; */
`
const ButtonsBox = styled.div`
flex-grow:3;
display:flex;
flex-direction:column;
justify-content: start;
align-items:center;
`
const Login = () => {

  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)
  // const [loadingUser, setLoadingUser] = useState(true)

  const [userError, setUserError] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState("");

  // const { passwordError, setPasswordError } = useState(false);
  // const { passwordErrorMessage, setPasswordErrorMessage } = useState("");

  async function login(user, password) {
    //  console.log(user, password)

    // const res = await Axios.get("http://hadita-resto-api.herokuapp.com/login", {
    //   "username": "admin",
    //   "password": "Ad1023MinN"
    // })
    const res = await Axios.get("http://hadita-resto-api.herokuapp.com/products")
    console.log(res)
    //let data = res.data
    //  setToken(data.token)
    //  console.log(data.token)
  }

  function handleUserChange(e) {
    setUser(e.target.value)
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    console.log("entro al hadnlesbu")
    e.preventDefault();
    //let letters = /^[A-Za-z ]+$/;

    if (!user || user.trim() === "") {
      setUserErrorMessage("Ingrese un usuario");
      setUserError(true);
    }

    // else if (!search.match(letters)) {
    //   setSearchErrorMessage("Solo se aceptan letras.");
    //   setSearchError(true);
    //} 
    else {
      await login()
      console.log("Dos dias me va a llevar la primera!")
    }
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

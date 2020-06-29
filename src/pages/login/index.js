import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
import Input from "../../components/forms/input";
import Button from "../../components/forms/button";

const Login = () => {

  return (

    <DefaultLayout>
      <form>
        <Input><label>Usuario o Correo Electrónico</label></Input>
        <Input><label>Contraseña</label></Input>
        <Button >Registrarse</Button>
        <Button >Iniciar Sesión</Button>
      </form>

    </DefaultLayout>
  );
};

export default Login;

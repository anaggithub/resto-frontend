import React from "react";
import APILogo from "../api-logo";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Header = () => {

  const Header = styled.header`
  background-color: blue;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
    position: relative;
  `;

  return (
    <Header >
      <Link to="/home/">
        <APILogo />
      </Link>
    </Header>
  );
};

export default Header;


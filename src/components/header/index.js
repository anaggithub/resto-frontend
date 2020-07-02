import React from "react";
import APILogo from "../api-logo";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #c9c9c9; */
    background-color: #AFEEEE;
    background-color: #5fe4e4;
    /* //background-color:palevioletred; */
    color:white;
  `;

const Header = ({ classes }) => {

  return (
    <StyledHeader >
      <Link to="/home/">
        <APILogo />
      </Link>
    </StyledHeader>
  );
};

export default Header;


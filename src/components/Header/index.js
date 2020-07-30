import React from "react";
import APILogo from "../Api-logo";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

const Header = ({ classes }) => (
  <StyledHeader>
    <Link to="/home/">
      <APILogo />
    </Link>
  </StyledHeader>
);

export default Header;

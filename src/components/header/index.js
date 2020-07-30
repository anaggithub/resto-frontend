import React from "react";
import APILogo from "../api-logo";
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

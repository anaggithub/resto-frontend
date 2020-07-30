import React from "react";
import APILogo from "../Api-logo";
import { StyledFooter, Copyrights, APILogo } from "./styles";

const Footer = () => (
  <StyledFooter>
    <ul className="footer--socialmedia">
      <li>
        <i className="fab fa-facebook-f"></i>
      </li>
      <li>
        <i className="fab fa-twitter"></i>
      </li>
      <li>
        <i className="fab fa-instagram"></i>
      </li>
      <li>
        <i className="fab fa-youtube"></i>
      </li>
    </ul>
    <Copyrights className="footer--info">
      <APILogo className="footer--info--apititle" />
      <p className="footer--info--paragraph">
        Todos Los Derechos Reservados © 2020
      </p>
    </Copyrights>
  </StyledFooter>
);

export default Footer;

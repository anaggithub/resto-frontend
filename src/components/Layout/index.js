import React from "react";
import Header from "../Header";
import { StyledDefaultLayout, Children } from "./styles";

const DefaultLayout = ({ children, layoutStyles, childrenStyles }) => (
  <StyledDefaultLayout styles={layoutStyles}>
    <Header />
    <Children styles={childrenStyles}>{children}</Children>
    {/* <Footer /> */}
  </StyledDefaultLayout>
);

export default DefaultLayout;

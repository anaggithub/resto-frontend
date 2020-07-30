import React from "react";
import Header from "../header";
import { StyledDefaultLayout, Children } from "./styles";

const DefaultLayout = ({ children, layoutStyles, childrenStyles }) => (
  <StyledDefaultLayout styles={layoutStyles}>
    <Header />
    <Children styles={childrenStyles}>{children}</Children>
    {/* <Footer /> */}
  </StyledDefaultLayout>
);

export default DefaultLayout;

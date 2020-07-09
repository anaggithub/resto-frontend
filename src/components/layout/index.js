import React from "react";
import Header from "../header";
import { StyledDefaultLayout, Children } from "./styles"

const DefaultLayout = ({ children }) => {
    return (
        <StyledDefaultLayout >
            <Header />
            <Children >
                {children}
            </Children>
            {/* <Footer /> */}
        </StyledDefaultLayout>
    );
}

export default DefaultLayout;

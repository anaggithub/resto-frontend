import React from "react";
import styled, { css } from 'styled-components';
import Header from "../header";

const StyledDefaultLayout = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction:column;
`;
const Children = styled.div`
width: 100%;
flex-grow: 1;
`;

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

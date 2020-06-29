import React from "react"
import Header from "../header";
import Footer from "../footer";
import styled from 'styled-components';

const StyledDefaultLayout = styled.div`
background-color: pink;
position: relative;
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
`;

const DefaultLayout = ({ children }) => {

    return (
        <StyledDefaultLayout >
            <Header />
            <div >
                {children}
            </div>
            <Footer />
        </StyledDefaultLayout>
    );
}

export default DefaultLayout;

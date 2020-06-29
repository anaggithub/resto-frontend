import React from "react"
import Header from "../header";
import Footer from "../footer";
import styled from 'styled-components';

const DefaultLayout = ({ children }) => {

    const DefaultLayout = styled.div`
    background-color: pink;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    `;

    return (
        <DefaultLayout >
            <Header />
            <div >
                {children}
            </div>
            <Footer />
        </DefaultLayout>
    );
}

export default DefaultLayout;

import React from "react";
import styled from 'styled-components'

const StyledAPIlogo = styled.p`
font-family: "Bree Serif", serif;
font-size:24px;
font-weight:300;
`;

function APILogo() {
    return (
        <StyledAPIlogo>Delilah Resto</StyledAPIlogo>
    );
}

export default APILogo
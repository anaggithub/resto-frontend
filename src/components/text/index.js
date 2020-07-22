import React from "react";
import PropTypes from "prop-types";
import styled, { css } from 'styled-components';

const Component = styled.div`
   background-color:"black";
   color: ${props => props.theme.red};
`;

const Text = ({ tag, size, font, weight, ...props }) => {
    return <Component as={tag} {...props} />;
};

Text.propTypes = {
    tag: PropTypes.string,
    size: PropTypes.string,
    font: PropTypes.string,
    weight: PropTypes.string
};

Text.defaultProps = {
    tag: "p",
    size: "14px"
};

export default Text;

import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Component = styled.div`
  ${({ as, styles }) => styles[as]};  
`;

const Typography = ({ tag, styles, ...props }) => {
    return <Component styles={styles} as={tag} {...props} />;
};

Typography.propTypes = {
    tag: PropTypes.string,
    styles: PropTypes.object
};

Typography.defaultProps = {
    tag: "p",
    styles: {}
};

export default Typography;

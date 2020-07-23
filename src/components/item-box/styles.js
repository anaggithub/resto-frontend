import styled, { css } from 'styled-components';

export const ItemsContainer = styled.div`
width:100%;
display:flex;
margin: 20px 0;
${({ styles }) => styles}
`;

export const Item = styled.div`
width:100%;
display:flex;
`;

export const ItemData = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content: center;
padding-left:10px;
`;

export const ItemImage = styled.img`
width:70px;
height:auto;
`;

export const typographyStyles = {
    h4: css`
          font-size:0.9rem;
        `,
    p: css`
          font-size:0.8rem;
       `,
};

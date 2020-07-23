import styled from 'styled-components';

export const StyledDefaultLayout = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction:column;
color: ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.background};
`;
export const Children = styled.div`
width: 100%;
max-width:1020px;
margin:0 auto;
flex-grow: 1;
display: flex;
flex-direction:column;
`;

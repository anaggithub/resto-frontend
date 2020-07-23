import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #c9c9c9; */   
    background-color:${({ theme }) => theme.colors.lightBlue};;
   p{
    color: ${({ theme }) => theme.colors.white};
   } 
  `;
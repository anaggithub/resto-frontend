import styled, { css } from 'styled-components';

export const Component = styled.div`
    ${({ as }) => defaultStyles[as]};  
    ${({ as, styles }) => styles[as]};  
`;

export const defaultStyles = {
  h1: css`
      font-size:1.2rem;    
      font-weight: 500;
  `,
  h2: css`
      font-size:1.1rem;       
  `,
  h3: css`
      font-size:1rem;      
  `,
  h4: css`
      font-size:0.9rem;    
  `,
  h5: css`
   font-size:0.8rem;    
 `,
  p: css`
     font-size:0.8rem;   
  `,
};
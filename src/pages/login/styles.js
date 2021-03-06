import styled from 'styled-components';

export const Form = styled.form`
width:100%;
flex-grow: 1;
display:flex;
flex-direction:column;
`;
export const InputsBox = styled.div`
box-sizing: border-box;
padding-top:2rem;
flex-grow: 1.5;
display:flex;
flex-direction:column;
justify-content: center;
input{
    margin-bottom:1rem;
}
@media (min-width: 500px) {
    padding: 2rem 10%;
  }
@media (min-width: 768px) {  
    padding: 2rem 15%; 
}
@media (min-width: 768px) {  
    padding: 2rem 16%; 
}
/* background-color: pink; */
`
export const ButtonsBox = styled.div`
flex-grow: 1;
display:flex;
flex-direction:column;
justify-content: start;
align-items:center;
button{
    margin-bottom:2rem;
}
`
export const SpinnerBox = styled.div`
position: absolute;
left:0;
right:0;
margin-left: auto;
margin-right: auto;
`
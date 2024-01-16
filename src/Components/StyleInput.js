import styled from 'styled-components'

const StyleInput = styled.input`
text-align: center; 
width: 30%;
height: 60px;
border-radius: 10rem;
border: none;
padding: 0rem 2rem;
font-size: 20px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
opacity: 90%;

 &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.5); 
    opacity: 100%; 
  }
  &:focus {
    outline: none;
  }
`
const StyledInputContainer = styled.div`
 margin: -5rem;
 display: flex;
 justify-content: center;
`
const StyledIconInput = styled.svg`
width: 3rem;
height: auto;
 &:hover {
    transform: scale(1.1);
  }
`



export { StyledIconInput, StyledInputContainer, StyleInput }
import styled from "styled-components";
const InputField = styled.input`
margin: .5rem;
border-radius: 2rem;
text-align: center;
border: none;
&:focus {
  outline: 5px solid #072541;
  }
&:hover {
    background-color: #E8F4F7;
  }
  `
const RegisterSubmitButton = styled.button`
margin: 1rem;
border-radius: 2rem;
text-align: center;
border: none;
color: white;
font-size: 1rem;
background-color: #072541; 
border-style: solid;
border-color: white;
border-width: 2px;
&:hover {
    background-color: #FFFFFF; 
    border-color: #072541;
    color: #072541; 
  }
&:active {
    transform: scale(0.95); 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`
const LoginStyle = styled.span`
font-weight: bolder;
&:hover{
  text-decoration: underline;
}
`
export { LoginStyle, InputField, RegisterSubmitButton }
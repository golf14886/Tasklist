import styled from "styled-components";

const LoginContainer = styled.div`
@media screen and (min-width: 1280px) {
display: grid;
}
`;
const ImgLogin = styled.div`
@media screen and (min-width: 1280px) {
  background-image: url("./img/top-view-person-writing-laptop-with-copy-space.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
}
@media screen and (max-width: 1200px) {
display: none;
}
`
const TASKLIST = styled.div`
margin-top: 3rem;
font-size: 3rem;
margin-bottom: 2rem;
display: flex;
align-items: center;
justify-content: center;
gap:.5rem;

animation-name:b;
animation-duration: 1s;
@keyframes b {
  from {
    opacity: 0%;
    transform: translate(0px, -200px);
  to {
    opacity: 100%;
   
  }
}
}
`
const LoginForm = styled.form`
@media screen and (max-width: 1200px) {
position: static;
width: 100%;
height: 100vh;
}
display: grid;
text-align: center;
border-radius: 10rem 0rem 0rem 0rem;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
position: absolute;
right: 0;
height: 100%;
width: 50%;
background: linear-gradient(90deg, rgba(82,114,242,1) 1%, rgba(51,85,221,1) 100%);
padding: 10rem;
animation-name:a;
animation-duration: 1s;
@keyframes a {
  from {
    opacity: 0%;
     transform: scale(0,0);
  to {
    opacity: 100%;
    transform: scale(0,0);
  }
}
}
`;

const InputField = styled.input`
@media screen and (max-width: 1200px) {
  font-size: 30px;
}
margin: 1rem;
border-radius: 2rem;
text-align: center;
border: none;
&:focus {
  outline: 5px solid #072541;
  }
&:hover {
    background-color: #E8F4F7;
  }
`;

const LoginSubmitButton = styled.button`
margin: 1rem;
border-radius: 2rem;
text-align: center;
background-color: #072541;
color: white;
font-size: 1rem;
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
const StyleSingUp = styled.span`
font-weight: bolder;
&:hover{
  text-decoration: underline;
}
`


export { StyleSingUp, TASKLIST, ImgLogin, LoginForm, InputField, LoginSubmitButton, LoginContainer };

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginForm,
  InputField,
  LoginSubmitButton,
  LoginContainer,
  ImgLogin,
  TASKLIST,
  StyleSingUp,
} from "./LoginContainer";
import { UserContext } from "../../App";
import { Register } from "../Register/Register";
import { onSingIn } from "../../firebase/onSingin";

export const LoginPage = () => {
  const { setDocIdUser, setItem } = useContext(UserContext);
  const [startRegister, setStartRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  const startLogin = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const userDataString = JSON.stringify(userData);
    document.cookie = `userData=${userDataString};path=/`;

    onSingIn(email, password, handleClick, setDocIdUser, setItem);
  };

  const fetchData = async () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      if (cookie.startsWith("userData=")) {
        let userString = cookie.substring(9);
        const objUserData = JSON.parse(userString);
        await onSingIn(
          objUserData.email,
          objUserData.password,
          handleClick,
          setDocIdUser,
          setItem
        );
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const login = () => {
    return (
      <>
        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={onEmail}
        />
        <InputField
          onChange={onPassword}
          value={password}
          type="password"
          placeholder="Password"
        />

        <LoginSubmitButton onClick={startLogin} type="submit">
          Login
        </LoginSubmitButton>
        <p type="submit">
          Don&apos;t have an account{" "}
          <StyleSingUp onClick={() => setStartRegister(!startRegister)}>
            Sign up
          </StyleSingUp>
        </p>
      </>
    );
  };

  return (
    <LoginContainer>
      <ImgLogin></ImgLogin>
      <LoginForm>
        <TASKLIST>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.5 12.5L10.5 14.5L15.5 9.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          TASKLIST
        </TASKLIST>
        {startRegister !== true ? (
          login()
        ) : (
          <Register
            startRegister={startRegister}
            setStartRegister={setStartRegister}
          ></Register>
        )}
      </LoginForm>
    </LoginContainer>
  );
};

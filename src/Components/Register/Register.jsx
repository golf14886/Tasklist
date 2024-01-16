import PropTypes from "prop-types";
import { useState } from "react";
import {
  LoginStyle,
  InputField,
  RegisterSubmitButton,
} from "./RegisterContainerStyle";
import { signUpWithEmailAndPassword } from "../../firebase/createUserWithEmailAndPassword";

export const Register = ({ setStartRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    setStartRegister(false);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswoed = (e) => {
    setPassword(e.target.value);
  };

  const onSigup = async (event) => {
    event.preventDefault();
    try {
      signUpWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <>
      {/* <InputField type="text" placeholder="Username" /> */}
      <InputField
        value={email}
        type="email"
        placeholder="Email"
        onChange={onChangeEmail}
      ></InputField>
      <InputField
        value={password}
        type="password"
        placeholder="Password"
        onChange={onChangePasswoed}
      />
      <RegisterSubmitButton onClick={onSigup} type="submit">
        Register
      </RegisterSubmitButton>
      <p>
        Already have an account <LoginStyle onClick={onLogin}>Login</LoginStyle>
      </p>
    </>
  );
};

Register.propTypes = {
  setStartRegister: PropTypes.func.isRequired,
};

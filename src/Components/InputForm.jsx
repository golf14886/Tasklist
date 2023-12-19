import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import GlobalPropTypes from "./GlobalPropTypes";

const StyledInputContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

const StyledInput = styled.input`
  width: 30rem;
  height: 2rem;
`;

const StyledButton = styled.button`
  width: 5rem;
  margin-left: 0.3rem;
`;

export const InputForm = (props) => {
  const { list, setList } = props;
  const [input, setInput] = useState("");

  const addList = () => {
    if (input !== "") {
      const newItem = { id: uuidv4(), text: input, completed: false };
      const updatedList = [...list, newItem];
      setList(updatedList);
      localStorage.setItem("myList", JSON.stringify(updatedList));
      setInput("");
    }
  };

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        value={input}
        onChange={(data) => setInput(data.target.value)}
      ></StyledInput>
      <StyledButton onClick={addList}>ADD</StyledButton>
    </StyledInputContainer>
  );
};

InputForm.propTypes = GlobalPropTypes;

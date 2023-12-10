import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import GlobalPropTypes from "./GlobalPropTypes";

const StyledInput = styled.div`
  display: flex;
  justify-items: center;
  position: fixed;
  bottom: 1rem;
`;

export const InputForm = (props) => {
  const { list, setList } = props;
  const [input, setInput] = useState("");

  const addList = () => {
    if (input !== "") {
      setList([...list, { id: uuidv4(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div>
      <div className="addListInput">
        <StyledInput>
          <input
            type="text"
            value={input}
            onChange={(data) => setInput(data.target.value)}
          />
          <button onClick={addList}>ADD</button>
        </StyledInput>
      </div>
    </div>
  );
};

InputForm.propTypes = GlobalPropTypes;

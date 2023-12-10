import styled from "styled-components";
import GlobalPropTypes from "./GlobalPropTypes";
import { useState } from "react";

const StyledEdit = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  padding: 20px;
  box-sizing: border-box;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 5rem;
    width: 50vw;
    height: 20vh;
  }
  button {
    padding: 5px;
    margin-top: 0.5rem;
  }
`;

export const Edit = (props) => {
  const { setEditItemId, itemID, list, setList } = props;

  const selectedItem = list.find((data) => data.id === itemID);

  const [valueForInput, setValueForInput] = useState(
    selectedItem ? selectedItem.text : ""
  );

  const handleInputChange = (e) => {
    setValueForInput(e.target.value);
  };

  const update = () => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemID ? { ...item, text: valueForInput } : item
      )
    );
    setEditItemId(false);
  };

  return (
    <>
      <StyledEdit>
        <input type="text" value={valueForInput} onChange={handleInputChange} />
        <div>
          <button onClick={update}>Save</button>
          <button onClick={() => setEditItemId(false)}>close</button>
        </div>
      </StyledEdit>
    </>
  );
};

Edit.propTypes = GlobalPropTypes;

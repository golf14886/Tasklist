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
`;

const StyledEditBox = styled.input`
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  width: 50vw;
  height: 30vw;
  padding: 1vw;
  text-align: center;
`;

const StyledButtonClose = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 20px;
  background-color: white;
`;

const StyledButtonSave = styled.button`
  margin-right: 1rem;
  width: 4rem;
  height: 2rem;
  border-radius: 20px;
  background-color: white;
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
    const updatedList = list.map((item) =>
      item.id === itemID ? { ...item, text: valueForInput } : item
    );

    setList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
    setEditItemId(false);
  };

  return (
    <>
      <StyledEdit>
        <StyledEditBox
          type="text"
          value={valueForInput}
          onChange={handleInputChange}
        />
        <div>
          <StyledButtonSave onClick={update}>Save</StyledButtonSave>
          <StyledButtonClose onClick={() => setEditItemId(false)}>
            close
          </StyledButtonClose>
        </div>
      </StyledEdit>
    </>
  );
};

Edit.propTypes = GlobalPropTypes;

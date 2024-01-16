import { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserContext } from "../App";
import { updateDescription } from "../firebase/updateData";
import { getItemList } from "../firebase/getItemList";
const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 1rem;
`;
const StyledInput = styled.input`
  padding: 1rem;
  width: 25rem;
  height: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  color: white;
  cursor: pointer;
  padding: 0.2rem 1rem;
  font-size: 10px;
  border: none;
  background: #072541;
  border-radius: 2rem;
  &:hover {
    transform: scale(1.2);
  }
`;

const CloseSave = styled.button`
  color: white;
  cursor: pointer;
  padding: 0.2rem 1rem;
  font-size: 10px;
  border: none;
  background: #072541;
  border-radius: 2rem;
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 1rem;
  flex-direction: column;
`;

export default function EditItem({ description, id, setOnEdit }) {
  const [editedDescription, setEditedDescription] = useState(description);
  const { docIdUser, setItem } = useContext(UserContext);
  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };
  const handleSaveClick = () => {
    if (editedDescription !== "") {
      updateDescription(editedDescription, docIdUser, id);
      getItemList(docIdUser)
        .then((data) => {
          setItem(data);
          setOnEdit("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <StyledComponent>
      <StyledInput
        type="text"
        value={editedDescription}
        onChange={handleDescriptionChange}
      />
      <StyledDiv>
        <CloseButton
          onClick={() => {
            setOnEdit("");
          }}
        >
          Close
        </CloseButton>
        <CloseSave onClick={handleSaveClick}>Save</CloseSave>
      </StyledDiv>
    </StyledComponent>
  );
}

EditItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setOnEdit: PropTypes.func.isRequired,
};

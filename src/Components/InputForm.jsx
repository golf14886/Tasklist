import { styled } from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { db } from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

const StyledInputContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 10rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 34rem;
  height: 2rem;
  padding-left: 1rem;
`;

const StyledAddButton = styled.div`
  display: flex;
  align-items: center;
  color: #30475e;
  margin-right: 1rem;
  font-size: 3rem;
  transition: transform 0.1s ease;

  &&:hover {
    transform: scale(1.2);
  }
`;

export const InputForm = ({ input, setInput }) => {
  // const [input, setInput] = useState("");

  const collectionRef = collection(db, "list");
  const addList = async () => {
    if (input !== "") {
      try {
        await addDoc(collectionRef, {
          id: uuidv4(),
          text: input,
          completed: false,
        });
        setInput("");
        console.log("เพิ่มข้อมูล สำเร็จ");
      } catch (error) {
        console.error("เพิ่มข้อมูล ล้มเหลว: " + error);
      }
    }
  };

  return (
    <StyledInputContainer>
      <StyledAddButton onClick={addList}>
        <FontAwesomeIcon icon={faFileCirclePlus} />
      </StyledAddButton>
      <StyledInput
        type="text"
        value={input}
        onChange={(data) => setInput(data.target.value)}
      ></StyledInput>
    </StyledInputContainer>
  );
};

InputForm.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};

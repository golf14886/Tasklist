import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase/firebase";
import ToggleSwitch from "./ToggleSwitch";
import { EditButton, EditButtonText } from "./EditButtonWithIcon";
import { SaveButton, SaveIcon, SaveButtonText } from "./SaveButtonComponent";
import {
  CloseButton,
  CloseIcon,
  CloseButtonText,
} from "./CloseButtonComponent";
import ListSyleItem from "./ListSyle";

const DeleteButton = styled.button`
  background-color: #f05454;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    margin-left: -50px;
    transform: scale(0.8, 0.8);
    height: 2.7rem;
    width: 5rem;
  }
  &:hover {
    background-color: #ff2c2c;
  }
`;

const StyleEdit = styled.div`
  display: flex;
  align-items: center;
`;

const InputEditSlyle = styled.input`
  width: 26rem;
  margin-left: 1rem;
  padding: 0.2rem;
  font-size: 1rem;
  padding-left: 1rem;
`;

export const List = ({ input, list, setList }) => {
  const [startEditor, setStartEditor] = useState(null);
  const [updateValue, setUpdateValue] = useState("");
  const [startUpdate, setstartUpdate] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const queryData = await getDocs(collection(db, "list"));
        const dataArr = [];
        queryData.forEach((doc) => {
          dataArr.push({
            docId: doc.id,
            text: doc.data().text,
            completed: doc.data().completed,
          });
        });
        const sortedDataArr = dataArr.sort((a, b) => {
          if (a.completed && !b.completed) return 1;
          if (!a.completed && b.completed) return -1;
          return 0;
        });
        setList(sortedDataArr);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [input, startUpdate, setList]);

  const updateList = async (id, newText) => {
    if (newText !== "") {
      try {
        const documentRef = doc(db, "list", id);
        await updateDoc(documentRef, { text: newText });
        setstartUpdate(!startUpdate);
        console.log("อัปเดตเอกสารสำเร็จ");
        setStartEditor(null);
      } catch (error) {
        console.log("updateList" + error);
      }
    } else {
      setStartEditor(null);
    }
  };

  const startEdit = (id) => {
    setStartEditor(id);
  };

  const closeEdit = () => {
    setStartEditor(null);
  };

  const deleteList = async (id) => {
    try {
      const documentRef = doc(db, "list", id);
      deleteDoc(documentRef);
      setstartUpdate(!startUpdate);
      console.log("ลบเอกสารสำเร็จ");
    } catch (error) {
      console.log("deletelist" + error);
    }
  };

  return (
    <div>
      {list.map((item) => {
        return (
          <ListSyleItem key={item.docId}>
            {startEditor === item.docId ? (
              <StyleEdit>
                <SaveButton onClick={() => updateList(item.docId, updateValue)}>
                  <SaveIcon>
                    <FontAwesomeIcon icon={faSave} />
                  </SaveIcon>
                  <SaveButtonText>Save</SaveButtonText>
                </SaveButton>

                <CloseButton onClick={() => closeEdit()}>
                  <CloseIcon>
                    <FontAwesomeIcon icon={faTimes} />
                  </CloseIcon>
                  <CloseButtonText>Close</CloseButtonText>
                </CloseButton>
                <InputEditSlyle
                  type="text"
                  defaultValue={item.text}
                  onChange={(data) => setUpdateValue(data.target.value)}
                />
              </StyleEdit>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.text}
              </div>
            )}
            <EditButton onClick={() => startEdit(item.docId)}>
              <FontAwesomeIcon icon={faPenToSquare} />
              <EditButtonText>Edit</EditButtonText>
            </EditButton>

            <DeleteButton onClick={() => deleteList(item.docId)}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{
                  fontSize: "20px",
                  marginRight: ".2rem",
                  ...(window.innerWidth <= 500 && {
                    fontSize: "15px",
                  }),
                }}
              />
              Delete
            </DeleteButton>

            <ToggleSwitch
              completed={item.completed}
              id={item.docId}
              startUpdate={startUpdate}
              setstartUpdate={setstartUpdate}
            />
          </ListSyleItem>
        );
      })}
    </div>
  );
};

List.propTypes = {
  input: PropTypes.any,
  //   input: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};

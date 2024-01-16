import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onSignOut } from "../firebase/signOut";
import { UserContext } from "../App";
import { StyleHome } from "./StyleHome";
import {
  StyledIconInput,
  StyleInput,
  StyledInputContainer,
} from "./StyleInput";
import { StyleHeader } from "./StyleHeader";
import { newTaskList } from "../firebase/newTaskList";
import ListItem from "./ListItem";
import { db } from "../firebase/firebase";

const StyleSingOut = styled.button`
  display: flex;
  align-items: center;
  width: 6rem;
  border: 0px;
  margin-top: 1rem;
  border-radius: 2rem;
  padding: 5px 10px;
  position: fixed;
  right: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: lightblue;
  }
`;

export default function Home() {
  const { setItem, docIdUser, addNewItem, setAddNewItem } =
    useContext(UserContext);
  const navigate = useNavigate();

  const signOut = async () => {
    await onSignOut(docIdUser);
    navigate("/login");
  };

  useEffect(() => {
    function checkItem(id) {
      if (id === "") {
        navigate("/login");
      }
    }
    checkItem(docIdUser);
  }, []);

  const addNewList = async () => {
    await newTaskList(docIdUser, addNewItem);
    const userCollection = await collection(db, docIdUser);
    const querySnapshot = await getDocs(userCollection);
    const data = await querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItem(data);
    setAddNewItem("");
  };

  return (
    <StyleHome>
      <StyleSingOut onClick={signOut}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 9.56757V14.4324C3.5 16.7258 3.5 17.8724 4.22161 18.5849C4.87719 19.2321 5.89578 19.2913 7.81846 19.2968C7.71686 18.6224 7.69563 17.8168 7.69029 16.8689C7.68802 16.4659 8.01709 16.1374 8.42529 16.1351C8.83348 16.1329 9.16624 16.4578 9.16851 16.8608C9.17451 17.9247 9.20249 18.6789 9.30898 19.2512C9.41158 19.8027 9.57634 20.1219 9.81626 20.3588C10.089 20.6281 10.4719 20.8037 11.1951 20.8996C11.9395 20.9985 12.9261 21 14.3407 21H15.3262C16.7407 21 17.7273 20.9985 18.4717 20.8996C19.1949 20.8037 19.5778 20.6281 19.8505 20.3588C20.1233 20.0895 20.3011 19.7114 20.3983 18.9975C20.4984 18.2626 20.5 17.2885 20.5 15.8919V8.10811C20.5 6.71149 20.4984 5.73743 20.3983 5.0025C20.3011 4.28855 20.1233 3.91048 19.8505 3.6412C19.5778 3.37192 19.1949 3.19635 18.4717 3.10036C17.7273 3.00155 16.7407 3 15.3262 3H14.3407C12.9261 3 11.9395 3.00155 11.1951 3.10036C10.4719 3.19635 10.089 3.37192 9.81626 3.6412C9.57634 3.87807 9.41158 4.19728 9.30898 4.74877C9.20249 5.32112 9.17451 6.07525 9.16851 7.1392C9.16624 7.54221 8.83348 7.8671 8.42529 7.86485C8.01709 7.86261 7.68802 7.53409 7.69029 7.13107C7.69563 6.18322 7.71686 5.37758 7.81846 4.70325C5.89578 4.70867 4.87719 4.76789 4.22161 5.41515C3.5 6.12759 3.5 7.27425 3.5 9.56757ZM5.93385 12.516C5.6452 12.231 5.6452 11.769 5.93385 11.484L7.90484 9.53806C8.19348 9.25308 8.66147 9.25308 8.95011 9.53806C9.23876 9.82304 9.23876 10.2851 8.95011 10.5701L8.24088 11.2703L15.3259 11.2703C15.7341 11.2703 16.0651 11.597 16.0651 12C16.0651 12.403 15.7341 12.7297 15.3259 12.7297L8.24088 12.7297L8.95011 13.4299C9.23876 13.7149 9.23876 14.177 8.95011 14.4619C8.66147 14.7469 8.19348 14.7469 7.90484 14.4619L5.93385 12.516Z"
              fill="#1C274C"
            ></path>{" "}
          </g>
        </svg>
        signOut
      </StyleSingOut>
      <StyleHeader></StyleHeader>
      <StyledInputContainer>
        <StyleInput
          value={addNewItem}
          onChange={(e) => setAddNewItem(e.target.value)}
          placeholder="Add New Item"
        ></StyleInput>
        <StyledIconInput
          onClick={addNewList}
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
            fill="#1C274C"
          />
        </StyledIconInput>
      </StyledInputContainer>
      <ListItem></ListItem>
    </StyleHome>
  );
}

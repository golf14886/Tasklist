import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { InputForm } from "./components/InputForm";
import { List } from "./components/List";
import "./App.css";

const StyledHead = styled.div`
  background-image: url("./img/top-view-person-writing-laptop-with-copy-space.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 500px) {
    width: 27rem;
    height: 10rem;
  }
`;
const StyleList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleH1 = styled.h1`
  margin-top: 3rem;
  font-size: 6rem;
  padding: 2rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background-color: #ffffff40;
  @media (max-width: 500px) {
    width: 15rem;
    height: 5rem;
    font-size: 30px;
    margin-top: 1rem;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon).attrs({
  icon: faPlus,
})`
  color: white;
  font-size: 3rem;
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  transition: transform 0.2s ease;
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  width: 2rem; /* กำหนดความกว้าง */
  height: 2rem; /* กำหนดความสูง */
  background-color: #30475e;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  &:hover {
    transform: scale(1.5);
  }
`;

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [onAdd, setOnAdd] = useState(false);
  return (
    <div className="container">
      <StyledHead>
        <StyleH1>TASKLIST</StyleH1>
      </StyledHead>
      <StyledFontAwesomeIcon
        onClick={() => setOnAdd(!onAdd)}
      ></StyledFontAwesomeIcon>
      <StyleList>
        {onAdd === true ? (
          <InputForm input={input} setInput={setInput} />
        ) : null}
        <List input={input} list={list} setList={setList} />
      </StyleList>
    </div>
  );
}

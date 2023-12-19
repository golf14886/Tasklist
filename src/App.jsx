import { useState } from "react";
import { styled } from "styled-components";
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
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export default function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <StyledHead>
        <h1 style={{ marginTop: "3rem" }}>TASKLIST</h1>
        <InputForm list={list} setList={setList} />
      </StyledHead>
      <List list={list} setList={setList} />
    </div>
  );
}

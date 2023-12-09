import { useState } from "react";
import AddList from "./Components/AddList";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <h1>Tasklist</h1>
      <AddList list={list} setList={setList} />

      {/* <List/>
      <InputForm/> */}
    </div>
  );
}

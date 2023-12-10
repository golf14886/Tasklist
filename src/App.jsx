import { useState } from "react";
// import AddList from "./components/AddList";
import { InputForm } from "./components/InputForm";
import { List } from "./components/List";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <h1>Tasklist</h1>
      <List list={list} setList={setList} />
      <InputForm list={list} setList={setList} />
    </div>
  );
}

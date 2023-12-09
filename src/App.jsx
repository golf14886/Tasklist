import { useState } from "react";
import Addlist from "./Components/Addlist";
import "./App.css";

export default function App() {
  const [list, setlist] = useState([]);
  return (
    <div className="contaner">
      <h1>Tasklist</h1>
      <Addlist list={list} setlist={setlist} />
    </div>
  );
}

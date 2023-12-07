import { useState } from "react";
import "./App.css";

function App() {
  const [addlist, setAddlist] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const onClickAdd = () => {
    setAddlist([...addlist, inputValue]);
    setInputValue("");
  };
  const list = addlist.map((item, index) => (
    <div key={index} className={"list-item"}>
      {item}
    </div>
  ));
  return (
    <>
      <div className="container">
        <h1 className="head">Welcome TaskList</h1>
        <div className="list">{list}</div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="add-button"
          onClick={inputValue !== "" ? onClickAdd : null}
        >
          add
        </button>
      </div>
    </>
  );
}

export default App;

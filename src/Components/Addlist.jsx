import { useState } from "react";
import PropTypes from "prop-types";
import "./addList.css";

export default function AddList(props) {
  const { list, setList } = props;
  const [input, setInput] = useState("");

  const addList = () => {
    if (input !== "") {
      setList([...list, { text: input, completed: false }]);
      setInput("");
    }
  };

  const onClickCompleted = (index) => {
    const updatedList = list.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setList(updatedList);
  };

  return (
    <div className="addList">
      <div className="list">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => onClickCompleted(index)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div className="addListInput">
        <input
          type="text"
          value={input}
          onChange={(data) => setInput(data.target.value)}
        />
        <button onClick={addList}>ADD</button>
      </div>
    </div>
  );
}

AddList.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};


// [{ 
//   id: "912114534",
//   text: "water the plane", 
//   completed: false 
// },
// { 
//   id: "912114535",
//   text: "water the plane2", 
//   completed: false 
// }]
import { useState } from "react";
import PropTypes from "prop-types";
import "./addlist.css";

export default function Addlist(props) {
  const { list, setlist } = props;
  const [input, setInput] = useState("");

  const addlist = () => {
    setlist([...list, { text: input, completed: false }]);
    setInput("");
  };

  const onClickCompleted = (index) => {
    const updatedList = list.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setlist(updatedList);
  };

  return (
    <div className="addlist">
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
      <div className="addlistinput">
        <input
          type="text"
          value={input}
          onChange={(data) => setInput(data.target.value)}
        />
        <button onClick={input !== "" ? addlist : null}>ADD</button>
      </div>
    </div>
  );
}

Addlist.propTypes = {
  list: PropTypes.array.isRequired,
  setlist: PropTypes.func.isRequired,
};

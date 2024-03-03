import { useState } from "react";
function Edit({ item }) {
  const [inputValue, setInputValue] = useState(item.text);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <input
      value={inputValue}
      onChange={handleInputChange}
      style={{ border: "none", outline: "none" }}
      className=" text-slate-950 text-center bg-white p-1 w-3/5"
    ></input>
  );
}

export default Edit;

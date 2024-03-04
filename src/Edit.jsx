import { useContext, useState } from "react";
import { UserContext } from "./App";
import { fetchData } from "./fetchData";
function Edit({ item, updateData, setOnEdit }) {
  const [inputValue, setInputValue] = useState(item.text);
  const { email, token } = useContext(UserContext);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function updateList() {
    updateData(item.ID, item.cheng, inputValue);
    fetchData();
    setOnEdit("");
  }
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInputChange}
        style={{ border: "none", outline: "none" }}
        className="text-slate-950 text-center bg-white p-1 w-3/5"
      />
      <button
        onClick={() => updateList()}
        className="bg-blue-500 text-white py-1 px-4 rounded ml-2"
      >
        Save
      </button>
    </div>
  );
}

export default Edit;

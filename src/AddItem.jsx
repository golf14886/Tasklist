import { useContext, useState } from "react";
import axios from "axios";
import SuccessAddItem from "./SuccessAddItem";
import { UserContext } from "./App";
import { fetchData } from "./fetchData";

function AddItem({}) {
  const [onClickAddItem, setOnClickAddItem] = useState(false);
  const [itemValue, setitemValue] = useState("");
  const [itemAdded, setItemAdded] = useState(false);
  const { email, setEmail, token, setToken, setListData } =
    useContext(UserContext);

  function addItem() {
    setOnClickAddItem(!onClickAddItem);
  }
  async function addItemTaskList() {
    try {
      const response = await axios.post(
        `http://localhost:8080/${email}`,
        {
          Text: itemValue,
          cheng: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setitemValue("");
      setItemAdded(true);
      setTimeout(() => setItemAdded(false), 1000);
      console.log();
      const data = await fetchData(token, email);
      setListData(data);
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }

  return (
    <div>
      {itemAdded ? (
        <SuccessAddItem itemValue={itemValue}></SuccessAddItem>
      ) : null}
      {onClickAddItem ? (
        <div
          className=" flex  justify-center items-center border-2 border-blue-400 px-5 py-1 
        rounded-md fixed bottom-1 ml-4 sm:ml-40 sm:w-4/6 lg:w-5/6 lg:ml-20"
        >
          <input
            value={itemValue}
            onChange={(e) => setitemValue(e.target.value)}
            type="text"
            placeholder="add Item"
            className=" w-full p-2 bg-white focus:outline-none text-xl text-black"
          />
          <svg
            onClick={addItemTaskList}
            className="w-5 h-5 transition-transform transform hover:scale-110"
            fill="#383838"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#383838"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M6.494 13.994c-.45 0-.67.547-.348.86l8 8c.188.186.488.195.686.02l9-8c.547-.44-.164-1.24-.664-.747l-8.648 7.685-7.666-7.666c-.095-.097-.224-.152-.36-.152zM14.5 2c.277 0 .5.223.5.5v18c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-18c0-.277.223-.5.5-.5zM.5 22c-.276.004-.504.224-.5.5v4c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-4c.01-.66-1-.657-1 0v4c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-4c.004-.282-.218-.504-.5-.5z"></path>
            </g>
          </svg>
        </div>
      ) : null}
      <button
        onClick={addItem}
        className=" w-14 h-14 bg-blue-900 rounded-full text-4xl text-white fixed right-1 bottom-1 hover:bg-blue-700 hover:scale-110 transition-transform"
      >
        +
      </button>
    </div>
  );
}

export default AddItem;

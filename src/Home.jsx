import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import Loading from "./Loading";
import Edit from "./Edit";
import AddItem from "./AddItem";

export default function Home() {
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState("");
  const [onEdit, setOnEdit] = useState("");
  const [checkBox, setCheckBox] = useState(null);
  const {
    listData,
    setListData,
    email,
    setEmail,
    token,
    setToken,
    statuFetchData,
    setStatuFetchData,
    data,
    setData,
  } = useContext(UserContext);

  function chengList(list, data) {
    if (list != null && data != "undefined" && data != null) {
      setEmail(list.user.email);
      return data;
    }
  }
  let lists = chengList(listData, data);

  function formatDate() {
    const date = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }
  const formattedDate = formatDate();

  async function deleteItem(Id) {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8080/${email}/${Id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStatuFetchData(!statuFetchData);
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  }

  const chengEdit = (item) => {
    if (item != onEdit) {
      setOnEdit(item);
    } else {
      setOnEdit("");
    }
  };

  const updateData = async (Id, updateCheng, updateText) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/${email}/${Id}`,
        {
          text: updateText,
          cheng: updateCheng,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Data updated successfully:", response.data);
      setStatuFetchData(!statuFetchData);
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  function checked(chengitem) {
    const ischengitem = !chengitem.cheng;
    updateData(chengitem.ID, ischengitem, chengitem.text);
  }

  function deleteCookie() {
    document.cookie = "token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie =
      "tokenEmail" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    navigate("/login");
  }

  return (
    <div>
      <div className=" w-screen bg-blue-900 text-white flex justify-between p-3 text-2xl">
        <div className=" flex items-center gap-3">
          <svg
            className=" w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.5"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="#1C274C"
              ></path>{" "}
              <path
                d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z"
                fill="#1C274C"
              ></path>{" "}
              <path
                d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z"
                fill="#1C274C"
              ></path>{" "}
            </g>
          </svg>
          <div>{listData != null ? listData.user.email : <div>...รอ</div>}</div>
        </div>

        <div className=" flex items-center gap-2 border-2 border-zinc-50 p-3 rounded-full hover:scale-110 transition-transform">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.125 12C16.125 11.5858 15.7892 11.25 15.375 11.25L4.40244 11.25L6.36309 9.56944C6.67759 9.29988 6.71401 8.8264 6.44444 8.51191C6.17488 8.19741 5.7014 8.16099 5.38691 8.43056L1.88691 11.4306C1.72067 11.573 1.625 11.7811 1.625 12C1.625 12.2189 1.72067 12.427 1.88691 12.5694L5.38691 15.5694C5.7014 15.839 6.17488 15.8026 6.44444 15.4881C6.71401 15.1736 6.67759 14.7001 6.36309 14.4306L4.40244 12.75L15.375 12.75C15.7892 12.75 16.125 12.4142 16.125 12Z"
                fill="#1C274C"
              ></path>{" "}
              <path
                d="M9.375 8C9.375 8.70219 9.375 9.05329 9.54351 9.3055C9.61648 9.41471 9.71025 9.50848 9.81946 9.58145C10.0717 9.74996 10.4228 9.74996 11.125 9.74996L15.375 9.74996C16.6176 9.74996 17.625 10.7573 17.625 12C17.625 13.2426 16.6176 14.25 15.375 14.25L11.125 14.25C10.4228 14.25 10.0716 14.25 9.8194 14.4185C9.71023 14.4915 9.6165 14.5852 9.54355 14.6944C9.375 14.9466 9.375 15.2977 9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5464 22 15.3748 22L16.3748 22C19.2032 22 20.6174 22 21.4961 21.1213C22.3748 20.2426 22.3748 18.8284 22.3748 16L22.3748 8C22.3748 5.17158 22.3748 3.75736 21.4961 2.87868C20.6174 2 19.2032 2 16.3748 2L15.3748 2C12.5464 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8Z"
                fill="#1C274C"
              ></path>{" "}
            </g>
          </svg>
          <button className="text-sm" onClick={() => deleteCookie()}>
            LogOut
          </button>
        </div>
      </div>
      <div className=" p-1 pl-5 bg-slate-100 text-xs text-blue-900">
        {formattedDate}
      </div>
      {lists != null ? (
        lists.map((item, index) => {
          return (
            <div
              key={index}
              className=" mx-10 flex justify-between items-center py-2  border-4 border-sky-600 rounded-3xl mt-2 px-4 drop-shadow-lg"
            >
              <input
                onChange={() => checked(item)}
                type="checkbox"
                checked={item.cheng}
                className="checkbox checkbox-primary"
              />
              {onEdit == item.ID ? (
                <Edit
                  item={item}
                  updateData={updateData}
                  setOnEdit={setOnEdit}
                ></Edit>
              ) : (
                <span className="label-text text-slate-950">{item.text}</span>
              )}
              <div className=" flex">
                <svg
                  onClick={() => chengEdit(item.ID)}
                  className="w-8 h-8 transition-transform transform hover:scale-110"
                  width="256px"
                  height="256px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 5L15 5"
                      stroke="#36619d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M4 8H15"
                      stroke="#36619d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M4 11H11"
                      stroke="#36619d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M18.4563 13.5423L13.9268 18.0719C13.6476 18.3511 13.292 18.5414 12.9048 18.6188L10.8153 19.0367L11.2332 16.9472C11.3106 16.5601 11.5009 16.2045 11.7801 15.9253L16.3096 11.3957M18.4563 13.5423L19.585 12.4135C19.9755 12.023 19.9755 11.3898 19.585 10.9993L18.8526 10.2669C18.4621 9.8764 17.8289 9.8764 17.4384 10.2669L16.3096 11.3957M18.4563 13.5423L16.3096 11.3957"
                      stroke="#36619d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <svg
                  onClick={() => deleteItem(item.ID)}
                  className="w-7 h-7 transition-transform transform hover:scale-110"
                  fill="#36619d"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#36619d"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.048"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
                  </g>
                </svg>
              </div>
            </div>
          );
        })
      ) : (
        <div>รอ</div>
      )}
      <AddItem />
    </div>
  );
}

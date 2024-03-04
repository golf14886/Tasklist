import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import SignUpSuccessful from "./SignUpSuccessful";
import SignInFailed from "./SignInFailed";
import Home from "./Home";
import { fetchData } from "./fetchData";

export const UserContext = createContext();

export default function App() {
  const [data, setData] = useState(null);
  const [listData, setListData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [userCookie, setuserCookie] = useState("");
  const [token, setToken] = useState("");
  const [statuFetchData, setStatuFetchData] = useState(true);

  async function getCookies() {
    const cookies = await document.cookie;
    const parts = cookies.split(";");
    for (let part of parts) {
      const [key, value] = part.split("=");
      if (key.trim() === "tokenEmail") {
        setEmail(value);
      }
      if (key.trim() === "token") {
        setToken(value);
      }
    }
  }

  async function sortedListData(listed) {
    try {
      if (listed != null) {
        const list = await listed.lists;
        const newList = list.sort((a, b) =>
          a.cheng === b.cheng ? 0 : a.cheng ? 1 : -1
        );
        return newList;
      }
    } catch (error) {
      console.log(error);
    }
  }
  sortedListData(listData)
    .then((sortedList) => {
      if (setListData != null) {
        setData(sortedList);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  useEffect(() => {
    getCookies();
    if (token !== "") {
      const fetchDataAndUpdateListData = async () => {
        const data = await fetchData(token, email);
        setListData(data);
      };
      fetchDataAndUpdateListData();
    }
  }, [token, email, statuFetchData]);

  const ErrorPage = () => {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  };
  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        listData,
        setListData,
        userLoggedIn,
        setUserLoggedIn,
        userCookie,
        setuserCookie,
        token,
        setToken,
        statuFetchData,
        setStatuFetchData,
        data,
        setData,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/SignUpSuccessful" element={<SignUpSuccessful />} />
          <Route path="/SignInFailed" element={<SignInFailed />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

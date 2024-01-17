import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import Home from "./components/Home";

export const UserContext = createContext();

export default function App() {
  const [docIdUser, setDocIdUser] = useState("");
  const [addNewItem, setAddNewItem] = useState("");
  const [Item, setItem] = useState([]);

  return (
    <UserContext.Provider
      value={{
        Item,
        setItem,
        docIdUser,
        setDocIdUser,
        addNewItem,
        setAddNewItem,
      }}
    >
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

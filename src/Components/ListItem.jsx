import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import {
  ListItemContainer,
  List,
  DeleteListItem,
  EditListItem,
  CompleteListItem,
  ItemDescription,
  IconDeleteListItem,
} from "./StyleListItem";
import EditItem from "./EditItem";
import { DeleteDoc } from "../firebase/DeleteDoc";
import { updatecomplete } from "../firebase/updateData";
import { getItemList } from "../firebase/getItemList";
function ListItem() {
  const { Item, docIdUser, setItem } = useContext(UserContext);
  const [onEdit, setOnEdit] = useState("");

  const startEdit = (id) => {
    setOnEdit(id);
  };

  const Deleteitem = async (id) => {
    try {
      DeleteDoc(id, docIdUser);
      const collectionRef = collection(db, docIdUser);
      const querySnapshot = await getDocs(collectionRef);
      const data = await querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItem(data);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const updateComplete = (id, complete) => {
    updatecomplete(docIdUser, id, complete);
    getItemList(docIdUser)
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  };

  const sortedItem = Item.sort((a, b) => {
    if (a.complete === false && b.complete === false) {
      return 0;
    } else if (a.complete === false) {
      return -1;
    } else {
      return 1;
    }
  });

  function getListItemStyle(isComplete) {
    if (isComplete) {
      return {
        color: "#ffffff",
        backgroundColor: "#072541",
        textDecoration: "line-through",
      };
    }
  }
  return (
    <ListItemContainer>
      {sortedItem.map((item) => (
        <List style={getListItemStyle(item.complete)} key={item.id}>
          <DeleteListItem>
            <IconDeleteListItem
              onClick={() => Deleteitem(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 14 14"
              role="img"
              focusable="false"
              aria-hidden="true"
            >
              <g transform="translate(8.2787194 -1036.3584336)">
                <circle
                  cx="1.7804884"
                  cy="1046.4354"
                  r="2.9268293"
                  fill="#f44336"
                />

                <g fill="#ffffff">
                  <path d="M3.33478104 1047.36652208l-.6207805.6207805-2.48312197-2.48312198.6207805-.6207805z" />

                  <path d="M.8493176 1047.98964404l-.6207805-.6207805 2.48312198-2.48312197.6207805.6207805z" />
                </g>
              </g>
            </IconDeleteListItem>
          </DeleteListItem>
          {onEdit == item.id ? (
            <EditItem
              description={item.description}
              setOnEdit={setOnEdit}
              id={item.id}
            ></EditItem>
          ) : (
            <div> {item.description} </div>
          )}
          <ItemDescription>
            <EditListItem
              onClick={() => startEdit(item.id)}
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
                  d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </EditListItem>
            <CompleteListItem
              onClick={() => updateComplete(item.id, item.complete)}
              fill="#ffffff"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
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
                  d="M854.344 1317.685 503.209 966.55l79.85-79.85 271.285 271.285 520.207-520.32 79.849 79.962-600.056 600.057ZM960.056 0c-529.355 0-960 430.645-960 960s430.645 960 960 960c529.243 0 960-430.645 960-960S1489.3 0 960.056 0Z"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </CompleteListItem>
          </ItemDescription>
        </List>
      ))}
    </ListItemContainer>
  );
}

export default ListItem;

import { useState } from "react";
import GlobalPropTypes from "./GlobalPropTypes";
import { Edit } from "./Edit";
import { styled } from "styled-components";

const StyleList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5rem;

  div {
    width: 5rem;
    height: 3rem;
    background-color: lightpink;
    padding: 0.5rem;
    border-radius: 10px 0px;
    font-size: 10px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    overflow: auto;
    white-space: pre-line;
    position: relative;
  }

  svg {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    margin: 2px;
  }

  svg:hover {
    transform: scale(1.2, 1.2);
  }
`;

export const List = (props) => {
  const { list, setList } = props;
  const [editItemId, setEditItemId] = useState(false);
  const [itemID, setItemID] = useState("");

  const onClickCompleted = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const sortedList = [
    ...list.filter((item) => !item.completed),
    ...list.filter((item) => item.completed),
  ];

  const onDoubleClickEdit = (id) => {
    setEditItemId(!editItemId);
    setItemID(id);
  };

  const del = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <StyleList>
        {sortedList.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickCompleted(item.id)}
            onDoubleClick={() => onDoubleClickEdit(item.id)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            <svg
              onClick={() => del(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="96"
              height="96"
              viewBox="0 0 96 96"
            >
              <path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z" />
            </svg>
            {item.text}
          </div>
        ))}
      </StyleList>

      {editItemId !== false && (
        <Edit
          setEditItemId={setEditItemId}
          itemID={itemID}
          list={list}
          setList={setList}
        />
      )}
    </div>
  );
};
List.propTypes = GlobalPropTypes;

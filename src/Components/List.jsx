import { useState, useEffect } from "react";
import GlobalPropTypes from "./GlobalPropTypes";
import { Edit } from "./Edit";
import { styled } from "styled-components";

const StyleListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 20rem;
  border-radius: 1rem;
  background-color: #d3d3d395;
`;

const StyleList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 2rem;
  height: 3rem;
  background-color: white;
  border-radius: 10rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyleEdit = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  position: relative;
  bottom: 5px;
`;

const StyleCheckbox = styled.input`
  margin-right: 1.5rem;
  transform: scale(1.5);
  transform-origin: center;
`;

const StyleListDelete = styled.svg`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 8px;
`;

const StyleItem = styled.div`
  text-align: center;
`;
const StyleCheng = styled.div`
  display: grid;
  align-self: flex-end;
  grid-template-columns: auto auto auto;
`;

export const List = (props) => {
  const { list, setList } = props;
  const [editItemId, setEditItemId] = useState(false);
  const [itemID, setItemID] = useState("");
  const [completed, setCompleted] = useState(false);

  const getData = () => {
    const item = localStorage.getItem("myList");
    if (item) {
      return JSON.parse(item);
    }
    return [];
  };

  useEffect(() => {
    const data = getData();
    setList(data);
  }, [setList]);

  const onClickCompleted = (id) => {
    const data = getData();
    const updatedList = data.map((item) => {
      if (item.id === id) {
        setCompleted(!completed);
        return { ...item, completed: completed };
      }
      return item;
    });
    setList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const sortedList = () => {
    const list = getData();
    return list.sort((a, b) => a.completed - b.completed);
  };

  const onClickEdit = (id) => {
    setEditItemId(!editItemId);
    setItemID(id);
  };

  const deleteList = (id) => {
    const data = getData();
    const updatedList = data.filter((item) => item.id !== id);
    localStorage.setItem("myList", JSON.stringify(updatedList));
    setList(updatedList);
  };

  return (
    <StyleListBox>
      {sortedList().map((item) => (
        <StyleList
          key={item.id}
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          <div></div>
          <StyleItem>{item.text}</StyleItem>
          <StyleCheng>
            <StyleCheckbox
              type="checkbox"
              checked={item.completed}
              onChange={() => onClickCompleted(item.id)}
              onClick={() => onClickCompleted(item.id)}
            ></StyleCheckbox>
            <StyleEdit
              onClick={() => onClickEdit(item.id)}
              src="./img/edit.png"
              alt="Edit"
            ></StyleEdit>
            <StyleListDelete
              onClick={() => deleteList(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 96 96"
            >
              <path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z" />
            </StyleListDelete>
          </StyleCheng>
        </StyleList>
      ))}

      {editItemId !== false && (
        <Edit
          setEditItemId={setEditItemId}
          itemID={itemID}
          list={list}
          setList={setList}
        />
      )}
    </StyleListBox>
  );
};
List.propTypes = GlobalPropTypes;

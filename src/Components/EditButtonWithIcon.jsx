import styled from "styled-components";

const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #30475e;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background-color 0.3s ease;
  @media (max-width: 1000px) {
    margin-right: 0.3rem;
    padding: 12px 20px;
  }
  @media (max-width: 500px) {
    margin-left: -80px;
    height: 3rem;
    width: 5rem;
    transform: scale(0.7, 0.7);
  }
  &:hover {
    background-color: #0056b3;
  }
`;
const EditButtonText = styled.span``;
export { EditButton, EditButtonText };

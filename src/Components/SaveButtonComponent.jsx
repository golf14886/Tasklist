import styled from "styled-components";

const SaveButton = styled.button`
  padding: 0.5rem;
  margin-right: 1rem;
  background-color: #28a745;
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

  &:hover {
    background-color: #218838; /* สีพื้นหลังปุ่มเมื่อโฮเวอร์ */
  }
`;

const SaveIcon = styled.span`
  margin-right: 5px; /* ระยะห่างระหว่างไอคอนกับข้อความ */
  font-size: 20px;
`;

const SaveButtonText = styled.span`
  font-weight: bold;
`;

export { SaveButton, SaveIcon, SaveButtonText };

import styled from "styled-components";

const CloseButton = styled.button`
  padding: 0.5rem;
  background-color: #dc3545; /* สีพื้นหลังปุ่ม */
  color: #fff; /* สีข้อความ */
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
    background-color: #c82333; /* สีพื้นหลังปุ่มเมื่อโฮเวอร์ */
  }
`;

const CloseIcon = styled.span`
  margin-right: 5px; /* ระยะห่างระหว่างไอคอนกับข้อความ */
  font-size: 20px;
`;

const CloseButtonText = styled.span`
  font-weight: bold;
`;

export { CloseButton, CloseIcon, CloseButtonText };

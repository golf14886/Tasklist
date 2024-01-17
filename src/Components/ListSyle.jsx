import styled from "styled-components";
const ListSyle = styled.div`
  background-color: white;
  width: 60rem;
  display: grid;
  align-items: center;
  grid-template-columns: 70% 10% 10% 10%;
  padding: 1rem;
  border-radius: 10rem;
  margin-bottom: 0.3rem;
  border: 1px solid #ccc; /* เพิ่มขอบ */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* เพิ่มเงา */

  &:hover {
    background-color: #587c9f; /* เปลี่ยนสีเมื่อโฮเวอร์ */
    transform: scale(1.05); /* เปลี่ยนขนาดเมื่อโฮเวอร์ */
  }
  @media (max-width: 1000px) {
    width: 40rem;
  }
  @media (max-width: 500px) {
    width: 25rem;
  }
`;

export default ListSyle;

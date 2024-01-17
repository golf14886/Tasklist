import styled from "styled-components";

// Styled-components for Success Component
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4caf50; /* สีเขียว */
  color: #fff; /* สีข้อความ */
  height: 100vh;
`;

const SuccessIcon = styled.img`
  width: 50px; /* ขนาดไอคอน */
  height: 50px;
`;

const SuccessMessage = styled.p`
  font-size: 24px; /* ขนาดข้อความ */
  margin-top: 10px;
`;

const SuccessComponent = () => {
  return (
    <SuccessContainer>
      <SuccessIcon src="checkmark.png" alt="Success Icon" />
      <SuccessMessage>การทำรายการสำเร็จ!</SuccessMessage>
    </SuccessContainer>
  );
};

export default SuccessComponent;

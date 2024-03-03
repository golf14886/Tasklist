import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const DivError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50vh;
  font-size: 2rem;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <DivError id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </DivError>
  );
}

import React from "react";
import styled from "styled-components";
import Message from "./Message";

const ErrorContainer = styled.div`
  color: red;
`;

function Error({ error }) {
  return (
    <>
      {error && (
        <Message>
          <ErrorContainer>Error exists. Fear, you must not.</ErrorContainer>
        </Message>
      )}
    </>
  );
}

export default Error;

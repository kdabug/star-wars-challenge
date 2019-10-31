import React from "react";
import styled from "styled-components";
import Message from "./Message";

const LoadingContainer = styled.div`
  color: green;
`;

function Loading({ data, condition }) {
  return (
    <>
      {data && condition && (
        <Message>
          <LoadingContainer>Loading this is. Wait you must.</LoadingContainer>
        </Message>
      )}
    </>
  );
}

export default Loading;

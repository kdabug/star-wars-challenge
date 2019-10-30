import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  border: solid 10px pink;
`;

function Loading({ error }) {
  return (
    <LoadingContainer>
      {error ? "Jedi...I am your Error" : "Loading this is. Wait you must."}
    </LoadingContainer>
  );
}

export default Loading;
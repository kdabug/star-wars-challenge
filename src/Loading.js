import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  border: solid 10px royalblue;
`;

function Loading({ films }) {
  return <LoadingContainer>Loading this is. Wait you must.</LoadingContainer>;
}

export default Loading;

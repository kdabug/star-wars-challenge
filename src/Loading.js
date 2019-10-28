import React from "react";
import styled from "styled-components";
import Card from "./Card";

const LoadingContainer = styled.div`
  border: solid 10px royalblue;
`;

function Loading({ films }) {
  return (
    <LoadingContainer>
      {films.map({movie} => (
        <Card>
          <h1>Star Wars App</h1>
        </Card>
      ))}
    </LoadingContainer>
  );
}

export default RenderCards;

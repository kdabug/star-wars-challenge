import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.div`
  border: solid 10px royalblue;
`;

function RenderCards({ films }) {
  return (
    <CardsContainer>
      {films.map({movie} => (
        <Card>
          <h1>Star Wars App</h1>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default RenderCards;

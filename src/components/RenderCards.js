import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Accordion from "react-bootstrap/Accordion";

const CardsContainer = styled.div`
  .card {
    background-color: black;
  }
`;

function RenderCards({ films, error }) {
  return (
    <Accordion>
      {films && !error && (
        <CardsContainer>
          {films.map((movie, i) => {
            return <Card key={`${movie}-${i}`} movie={movie} i={i} />;
          })}
        </CardsContainer>
      )}
    </Accordion>
  );
}

export default RenderCards;

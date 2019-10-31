import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.div`
  border: solid 10px royalblue;
`;

function RenderCards({ films, error }) {
  return (
    <>
      {films && !error && (
        <CardsContainer class="accordian">
          {films.map((movie, i) => {
            console.log(movie);
            return <Card key={`${movie}-${i}`} movie={movie} class="card" />;
          })}
        </CardsContainer>
      )}
    </>
  );
}

export default RenderCards;

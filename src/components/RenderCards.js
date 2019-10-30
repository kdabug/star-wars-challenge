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
        <CardsContainer>
          {films.map((movie, i) => {
            console.log(movie);
            return <Card key={`${movie}-${i}`} movie={movie}></Card>;
          })}
        </CardsContainer>
      )}
    </>
  );
}

export default RenderCards;

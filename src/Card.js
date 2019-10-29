import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  color: grey;
  background-color: black;
  border: 3px solid gold;
`;

function Card({ movie }) {
  return (
    <StyledCard>
      <h1>{movie.title}</h1>
    </StyledCard>
  );
}

export default Card;

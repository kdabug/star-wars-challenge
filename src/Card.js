import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  color: blue;
`;

function Card() {
  return (
    <StyledCard>
      <h1>Star Wars App</h1>
    </StyledCard>
  );
}

export default Card;

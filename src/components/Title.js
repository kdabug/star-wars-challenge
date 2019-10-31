import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  color: blue;
`;

function Title() {
  return (
    <StyledTitle>
      <h1>Star Wars App</h1>
    </StyledTitle>
  );
}

export default Title;

import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  color: gold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 5%;
  h1 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
    font-family: "Star Jedi";
  }
  p {
    font-family: "Random Star Wars";
    font-size: 2.5rem;
    color: #888888;
    letter-spacing: 20px;
  }
`;

function Title() {
  return (
    <StyledTitle>
      <h3>Star Wars</h3>
      <h1>Movie Finder</h1>
      <p>gADB</p>
    </StyledTitle>
  );
}

export default Title;

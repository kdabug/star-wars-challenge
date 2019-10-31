import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  color: grey;
  background-color: black;
  border: 3px solid gold;
`;

function Card({ movie }) {
  const date = new Date(movie.release_date);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const releaseDate =
    weekdays[date.getDay()] + ", " + date.toDateString().slice(4);
  console.log(date, releaseDate);
  return (
    <StyledCard class="card-header">
      <h1>{movie.title}</h1>
      <h4>Release Date: {releaseDate}</h4>
      <button
        class="btn btn-link"
        type="button"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Opening Crawl
      </button>
      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="card-body">{movie.opening_crawl}</div>
      </div>
    </StyledCard>
  );
}

export default Card;

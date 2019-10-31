import React from "react";
import styled from "styled-components";
import { Card as BootstrapCard } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const StyledCard = styled.div`
  color: grey;
  background-color: black;
  border: 3px solid gold;
`;

function Card({ movie, i }) {
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
    <BootstrapCard>
      <StyledCard>
        <BootstrapCard.Header defaultActiveKey={i}>
          <h1>{movie.title}</h1>
          <h4>Release Date: {releaseDate}</h4>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </BootstrapCard.Header>
        <Accordion.Collapse eventKey="0">
          <BootstrapCard.Body>{movie.opening_crawl}</BootstrapCard.Body>
        </Accordion.Collapse>
      </StyledCard>
    </BootstrapCard>
  );
}

export default Card;

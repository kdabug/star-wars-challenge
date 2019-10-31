import React from "react";
import styled from "styled-components";
import { Card as BootstrapCard } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const StyledCard = styled.div`
  color: grey;
  background-color: black;
  padding: 0% 10%;
  border: 3px solid gold;
  margin: 20px 0;

  h4 {
    font-family: "Anakin";
    font-size: 0.9rem;
  }
  p {
    font-family: "Anakin";
    color: grey;
    font-size: 0.9rem;
    margin-block-end: 0;
  }
  button {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 5px;
    margin: auto;
  }
  button:active {
    transform: scale(0.9);
    transition: transform ease-in-out;
  }
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
          <Accordion.Toggle as={Button} variant="link" eventKey={i}>
            <p>Opening Crawl</p>
          </Accordion.Toggle>
        </BootstrapCard.Header>
        <Accordion.Collapse eventKey={i}>
          <BootstrapCard.Body>
            <p>{movie.opening_crawl}</p>
          </BootstrapCard.Body>
        </Accordion.Collapse>
      </StyledCard>
    </BootstrapCard>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import RenderCards from "./components/RenderCards";
import "./App.css";
import Error from "./components/Error";

import Loading from "./components/Loading";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [foundError, setFoundError] = useState(false);

  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    console.log(selectedCharacter);
    if (selectedCharacter != null) {
      fetch(selectedCharacter.url)
        .then(res => res.json())
        .then(response => {
          console.log("selectedChar + Response", selectedCharacter, response);
          if (!response.detail) {
            setFoundError(false);
            setCurrentCharacter(response);
          } else {
            setFoundError(true);
          }
        })
        .catch(error => console.log("ERROR", error));
    }
  }, [selectedCharacter]);

  useEffect(() => {
    console.log(currentCharacter, foundError);
    if (currentCharacter !== null) {
      async function fetchData() {
        console.log("CC", currentCharacter.films);
        const response = currentCharacter.films.map(async film => {
          const response = await fetch(film);
          return response.json();
        });
        const result = await Promise.all(response);
        setFilmData(result);
      }
      if (!foundError) {
        fetchData();
      }
    }
  }, [currentCharacter, foundError]);

  const handleCharacterSubmit = newSelectedCharacter => {
    setSelectedCharacter(newSelectedCharacter);
  };

  return (
    <>
      <Title />
      <SearchBar
        selectedCharacter={selectedCharacter}
        onSubmit={handleCharacterSubmit}
      />
      <Loading condition={currentCharacter !== null} data={filmData === null} />
      <Error error={foundError} />
      <RenderCards films={filmData} />
    </>
  );
}

export default App;

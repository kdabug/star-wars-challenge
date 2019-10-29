import React, { useEffect, useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import RenderCards from "./RenderCards";
import "./App.css";

import Loading from "./Loading";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    console.log(selectedCharacter);
    if (selectedCharacter != null) {
      fetch(selectedCharacter.url)
        .then(res => res.json())
        .then(response => {
          console.log("selectedChar + Response", selectedCharacter, response);
          setCurrentCharacter(response);
        })
        .catch(error => console.log(error));
    }
  }, [selectedCharacter]);

  useEffect(() => {
    console.log(currentCharacter);
    if (currentCharacter != null) {
      async function fetchData() {
        const response = currentCharacter.films.map(async film => {
          const response = await fetch(film);
          return response.json();
        });
        const result = await Promise.all(response);
        setFilmData(result);
      }
      fetchData();
    }
  }, [currentCharacter]);

  const handleCharacterSubmit = newSelectedCharacter => {
    setSelectedCharacter(newSelectedCharacter);
  };

  return (
    <div className="App">
      <Title />
      <SearchBar
        selectedCharacter={selectedCharacter}
        onSubmit={handleCharacterSubmit}
      />
      {filmData === null && currentCharacter !== null && <Loading />}
      {filmData !== null && <RenderCards films={filmData} />}
    </div>
  );
}

export default App;

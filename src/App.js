import React, { useEffect, useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import RenderCards from "./RenderCards";
import "./App.css";

import Loading from "./Loading";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filmData, setFilmData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(selectedCharacter);
    if (selectedCharacter != null) {
      fetch(selectedCharacter.url)
        .then(res => res.json())
        .then(response => {
          console.log(selectedCharacter, response);
          // setSelectedCharacter(response.items);
          // setIsLoading(true);
          // setFilmData(response.items.films);
        })
        .catch(error => console.log(error));
    }
  }, [selectedCharacter]);

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
      {filmData === null ? (
        <Loading isLoading={isLoading} />
      ) : (
        <RenderCards setIsLoading={setIsLoading} films={filmData} />
      )}
    </div>
  );
}

export default App;

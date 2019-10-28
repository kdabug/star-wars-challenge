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

  useEffect(
    selectedCharacter => {
      if (selectedCharacter != null) {
        fetch(selectedCharacter.url)
          .then(res => res.json())
          .then(response => {
            setSelectedCharacter(response.items);
            setIsLoading(true);
            setFilmData(response.items.films);
          })
          .catch(error => console.log(error));
      }
    },
    [selectedCharacter]
  );

  return (
    <div className="App">
      <Title />
      <SearchBar
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
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

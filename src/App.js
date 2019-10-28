import React, { useEffect, useState } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import RenderCards from "./RenderCards";
import "./App.css";
import data from "./characters.json";

function App() {
  const [characterData, setCharacterData] = useState(data.characters);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filmData, setFilmData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(({selectedCharacter}) => {
    if(selectedCharacter != null){
      fetch(selectedCharacter.url)
      .then(res => res.json())
      .then(response => {
        setSelectedCharacter(response.items);
        setFilmData(response.items.films)
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  };
}


  return (
    <div className="App">
      <Title></Title>
      <SearchBar characters={characterData} setSelectedCharacter={setSelectedCharacter}></SearchBar>
      {filmData && <RenderCards films={filmData}></RenderCards>}
    </div>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import Select from "react-select";
import data from "./characters.json";

const characterSelect = data.characters.map(character => {
  return { value: character.url, label: character.name };
});

const Search = styled.div`
  color: blue;
`;

function SearchBar({ selectedCharacter, setCharacterData }) {
  console.log(characterSelect);
  return (
    <Search>
      <Select options={characterSelect} />{" "}
    </Search>
  );
}

export default SearchBar;

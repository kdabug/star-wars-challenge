import React, { useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import data from "./characters.json";

const characterSelect = data.characters.map(character => {
  return { value: character.url, label: character.name };
});

const SearchForm = styled.form`
  color: blue;
`;

function SearchBar({ onSubmit, selectedCharacter }) {
  const handleClick = ({ label, value }) => {
    onSubmit({ name: label, url: value });
  };
  return (
    <SearchForm>
      <Select options={characterSelect} onChange={handleClick} />
    </SearchForm>
  );
}

export default SearchBar;

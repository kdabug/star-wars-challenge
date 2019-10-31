import React from "react";
import styled from "styled-components";
import Select from "react-select";
import data from "./../characters.json";

const characterSelect = data.characters.map(character => {
  return { value: character.url, label: character.name };
});

const SearchForm = styled.form`
  color: gold;
  font-family: "Anakin";
  border-style: 2px solid grey;
  background-color: black;
  outline: none;
`;

const colorStyles = {
  control: styles => ({ ...styles, backgroundColor: "black" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = "lightgrey";
    return {
      ...styles,
      outline: "none",
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "black"
        : isFocused
        ? "grey"
        : "black",
      color: "gold",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? "white" : color),
        color: color
      }
    };
  },
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles })
};

function SearchBar({ onSubmit, selectedCharacter }) {
  const handleClick = ({ label, value }) => {
    onSubmit({ name: label, url: value });
  };
  return (
    <SearchForm>
      <Select
        options={characterSelect}
        styles={colorStyles}
        onChange={handleClick}
      />
    </SearchForm>
  );
}

export default SearchBar;

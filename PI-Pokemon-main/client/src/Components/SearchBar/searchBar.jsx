import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../Actions/index";
import "./searchBar.css";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    document.getElementById("valueName").value = "";
  }
  return (
    <div>
      <input
        id="valueName"
        className="inputsearch"
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Buscar.."
      />
      <button
        curson="hand"
        className="ButtonSearch"
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        Buscar
      </button>
    </div>
  );
}

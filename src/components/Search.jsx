import React, { useState } from "react";

function Search({ dataFiltered, setDataFiltered }) {
  const [seachText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = dataFiltered.filter((collaborator) => {
      return collaborator.name.toLowerCase().includes(seachText.toLowerCase());
    });

    setDataFiltered(result);
  };

  return (
    <div className="searchBar">
      {/* <input
      className="form-control"
        type="text"
        placeholder="Buscar..."
        value={seachText}
        onChange={handleChange}
      />
      <button className="searchButton btn btn-primary" type="submit" onClick={handleSubmit}>
        Buscar
      </button> */}
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar . . ."
        />
      </div>
    </div>
  );
}

export default Search;

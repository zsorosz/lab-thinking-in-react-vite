import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <label>
        Search
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchBar;

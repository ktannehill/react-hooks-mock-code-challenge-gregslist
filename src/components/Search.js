import React, { useState } from "react";

function Search({ onFilterSearch }) {
  const [search, setSearch] = useState("")
 
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onFilterSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

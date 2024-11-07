import React, { useState } from "react";

const SearchBar = ({ setSearch, fetchMeals }) => {
  const [input, setInput] = useState("");

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setSearch(input);
    fetchMeals(input); // Call parent function to fetch meals based on search input
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a meal..."
        value={input}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";

// search transactions
const SearchBar = ({ onSearch }) => {
  // State for search
  const [searchInput, setSearchInput] = useState("");

  // Function to handle search input change

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value); // To call the onSearch function with the search term
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

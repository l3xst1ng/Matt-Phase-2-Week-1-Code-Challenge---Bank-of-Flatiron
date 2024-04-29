import React, { useState } from "react";
import "./SearchBar.css";

// search transactions
const SearchBar = ({ onSearch }) => {
  // State for search
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search term change

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // To call the onSearch function with the search term
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

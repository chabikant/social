import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search for videos..."
      value={query}
      onChange={handleChange}
    />
  </div>
  );
};

export default SearchBar;

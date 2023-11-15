import React, { useState } from 'react';
import axios from 'axios';

function Search({ onSearchResults, category, searchField }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const apiUrl = `http://localhost:8000/api/${category}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchData();

      // Filter data based on search criteria
      const filteredResults = data.filter((item) =>
        item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
      );

      onSearchResults(filteredResults);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
      {loading && <p>Searching...</p>}
    </div>
  );
}

export default Search;

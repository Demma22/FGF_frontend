import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';


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
<div style={{ position: 'relative' }}>
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
    style={{ paddingRight: '30px' }} // Adjust padding to make room for the search button
  />
  <button
    onClick={handleSearch}
    className="mt-0.4"
    disabled={loading}
    style={{
      position: 'absolute',
      right: '25px', // Adjust the position as needed
      top: '50%', // Adjust the position as needed
      transform: 'translateY(-50%)', // Center vertically
    }}
  >
    <FaSearch />
  </button>
  {loading && <p>Searching...</p>}
</div>
  );
}

export default Search;

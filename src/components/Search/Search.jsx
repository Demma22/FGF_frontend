import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function Search({ onSearchResults, categories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const matchSearchCriteria = (item, category) => {
    const searchLower = searchTerm.toLowerCase();

    if (category === 'animals/animals/') {
      return (
        item.english_name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.scientific_name.toLowerCase().includes(searchLower)
      );
    } else if (category === 'plants') {
      return (
        item.botanical_name.toLowerCase().includes(searchLower) ||
        item.names.toLowerCase().includes(searchLower) ||
        item.scientific_name.toLowerCase().includes(searchLower)
      );
    } else if (category === 'cultures') {
      return (
        item.kingdom_name.toLowerCase().includes(searchLower) ||
        item.ethnicity.toLowerCase().includes(searchLower)
      );
    }

    return false;
  };

  const fetchData = async (category) => {
    try {
      const apiUrl = `https://fgf-app.onrender.com/api/${category}`;
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
      let searchResults = [];

      for (const category of categories) {
        const data = await fetchData(category);

        // Filter data based on search criteria
        const filteredResults = data.filter((item) =>
          matchSearchCriteria(item, category)
        );

        // Add category label to each result
        const resultsWithCategory = filteredResults.map((result) => ({
          ...result,
          category,
        }));

        searchResults = searchResults.concat(resultsWithCategory);
      }

      onSearchResults(searchResults);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:border-green-600 mt-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="ml-2 mt-3"
          disabled={loading}
        >
          <FaSearch />
        </button>
      </div>

      {/* Display loading message */}
      {loading && <p className="text-center mt-4">Searching...</p>}

      {/* Display search results */}
      {!loading && onSearchResults.length === 0 && (
        <p className="text-center mt-4">No Results Found</p>
      )}
    </div>
  );
}

export default Search;

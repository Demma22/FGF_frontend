import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({ onSearchResults, categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let searchResults = [];

      for (const category of categories) {
        // Update the API URL based on the category
        const apiUrl = `http://localhost:8000/api/${category}/`;

        // Fetch data from the selected category
        const response = await axios.get(apiUrl);
        const data = response.data;

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
      setLoading(false);
    };

    fetchData();
  }, [searchTerm, categories, onSearchResults]);

  const matchSearchCriteria = (item, category) => {
    const searchLower = searchTerm.toLowerCase();

    if (category === "animals") { //changed from animals/animals
      return (
        item.english_name.toLowerCase().includes(searchLower) ||
        item.local_names.toLowerCase().includes(searchLower) ||
        item.scientific_name.toLowerCase().includes(searchLower)
      );
    } else if (category === "plants") {
      return (
        (item.english_name && item.english_name.toLowerCase().includes(searchLower)) ||
        (item.local_names && item.local_names.toLowerCase().includes(searchLower)) ||
        (item.scientific_name && item.scientific_name.toLowerCase().includes(searchLower))
      );
    } else if (category === "cultures") {
      return (
        item.ethnic_group_name.toLowerCase().includes(searchLower) ||
        item.animal_name.toLowerCase().includes(searchLower)
      );
    }

    return false;
  };

  return (
    <div>
      <div className="flex justify-center mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:border-green-600 mt-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
}

export default Search;

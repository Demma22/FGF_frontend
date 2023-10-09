import React, { useState, useEffect } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allAnimals, setAllAnimals] = useState([]); // Store all animals from the API

  useEffect(() => {
    // Define the API URL to fetch all animals
    const allAnimalsApiUrl = 'https://fgf-app.onrender.com/api/docs/#/api/api_animals_animals_list';
    // Define the API URL to search for animals
   
   
    const searchApiUrl = `https://fgf-app.onrender.com/api/docs/#/api/api_animals_animals_list`;

    // Fetch all animals from the API initially
    fetch(allAnimalsApiUrl)
      .then((response) => response.json())
      .then((data) => {
        
        setAllAnimals(data); // Store all animals from the API
      })
      .catch((error) => {
        console.error('Error fetching all animals:', error);
      });
    
    // Ensure the searchTerm is not empty before making the search API request
    if (searchTerm.trim() !== '') {
      // Set loading state while fetching data
      setLoading(true);

      // Fetch data from the search API
      fetch(searchApiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data); // Set the search results from the API response
          setLoading(false); // Clear loading state
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setLoading(false); // Clear loading state
        });
    } else {
      setSearchResults([]); // Clear the search results if the search term is empty
    }
  }, [searchTerm]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      <ul className="mt-2">
        {searchResults.map((result) => (
          <li key={result.id} className="py-2 border-b">
            {result.english_name}
            {/* Include a button or checkbox for selecting the animal here */}
          </li>
        ))}
      </ul>
      
      <h2 className="mt-4 text-xl font-semibold">All Animals</h2>
      <ul className="mt-2">
        {allAnimals.map((animal) => (
          <li key={animal.id} className="py-2 border-b">
            {animal.local_name}
            {/* Include a button or checkbox for selecting the animal here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

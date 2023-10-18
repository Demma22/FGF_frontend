import React, { useState, useEffect } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("animals"); // Default category

  const [allAnimals, setAllAnimals] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [allCultures, setAllCultures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Define the API base URL
      const baseUrl = "https://fgf-app.onrender.com/api/";

      // Define the API URL for the selected category
      let apiUrl = "";
      if (selectedCategory === "animals") {
        apiUrl = `${baseUrl}animals/`;
      } else if (selectedCategory === "plants") {
        apiUrl = `${baseUrl}plants/`;
      } else if (selectedCategory === "cultures") {
        apiUrl = `${baseUrl}cultures/cultures/clans/`;
      }

      // Fetch data from the selected category
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (selectedCategory === "animals") {
        setAllAnimals(data);
      } else if (selectedCategory === "plants") {
        setAllPlants(data);
      } else if (selectedCategory === "cultures") {
        setAllCultures(data);
      }

      setLoading(false);
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Explore {selectedCategory}
      </h2>
      <div className="flex justify-center space-x-4">
        <button
          className={`${
            selectedCategory === "animals"
              ? "bg-green-500 text-white"
              : "bg-green-800"
          } hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => handleCategoryChange("animals")}
        >
          Animals
        </button>
        <button
          className={`${
            selectedCategory === "plants"
              ? "bg-green-500 text-white"
              : "bg-green-800"
          } hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => handleCategoryChange("plants")}
        >
          Plants
        </button>
        <button
          className={`${
            selectedCategory === "cultures"
              ? "bg-green-500 text-white"
              : "bg-green-800"
          } hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full`}
          onClick={() => handleCategoryChange("cultures")}
        >
          Cultures
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p className="text-center mt-4">Loading...</p>}
      <ul className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {selectedCategory === "animals" &&
          allAnimals.map((animal) => (
            <li
              key={animal.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={animal.image} // Add the URL for animal images
                alt={animal.english_name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{animal.english_name}</h3>
                <p className="text-gray-700">{animal.description}</p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Select
                </button>
              </div>
            </li>
          ))}
        {selectedCategory === "plants" &&
          allPlants.map((plant) => (
            <li
              key={plant.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={plant.image} // Add the URL for plant images
                alt={plant.english_name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{plant.english_name}</h3>
                <p className="text-gray-700">{plant.description}</p>
                <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  Select
                </button>
              </div>
            </li>
          ))}
        {selectedCategory === "cultures" &&
          allCultures.map((culture) => (
            <li
              key={culture.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={culture.image} // Add the URL for culture images
                alt={culture.clan_name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{culture.clan_name}</h3>
                <p className="text-gray-700">{culture.description}</p>
                <button className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                  Select
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;

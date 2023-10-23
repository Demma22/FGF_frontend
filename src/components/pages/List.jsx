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

      // Definining the API base URL
      const baseUrl = "https://fgf-app.onrender.com/api/";

      // Definining the API URL for the selected category
      let apiUrl = "";
      if (selectedCategory === "animals") {
        apiUrl = `${baseUrl}animals/animals/`;
      } else if (selectedCategory === "plants") {
        apiUrl = `${baseUrl}plants/`;
      } else if (selectedCategory === "cultures") {
        apiUrl = `${baseUrl}cultures/cultures/ethnicities/`;
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
              ? "bg-red-600 text-white"
              : "bg-green-800"
          } hover:bg-green-800 text-white font-bold py-1 px-10`}
          onClick={() => handleCategoryChange("animals")}
        >
          Animals
        </button>
        <button
          className={`${
            selectedCategory === "plants"
              ? "bg-red-600 text-white"
              : "bg-green-800"
          } hover:bg-green-800 text-white font-bold py-2 px-10`}
          onClick={() => handleCategoryChange("plants")}
        >
          Plants
        </button>
        <button
          className={`${
            selectedCategory === "cultures"
              ? "bg-red-600 text-white"
              : "bg-green-800"
          } hover:bg-green-800 text-white font-bold py-2 px-10`}
          onClick={() => handleCategoryChange("cultures")}
        >
          Cultures
        </button>
        </div>
 
      <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:border-green-600 mt-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}
      <ul className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-10 ml-10">
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
                <h3 className="text-xl font-semibold mb-2">
                  {animal.english_name}
                </h3>
                <p className="text-gray-700">{animal.description}</p>
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
                alt={plant.botanical_name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {plant.botanical_name}
                </h3>
                <p className="text-gray-700">{plant.notes}</p>
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
                <h3 className="text-xl font-semibold mb-2">
                  {culture.clan_name}
                </h3>
                <p className="text-gray-700">{culture.description}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;

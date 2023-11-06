// http://localhost:8000/api/plants/${plantId}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPlantDetail = ({ plantId, onClose }) => {
  const [plantDetails, setPlantDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
        axios.get(`http://localhost:8000/api/plants/${plantId}`)  
          .then((response) => {
            setPlantDetails(response.data);
          })
          .catch((error) => {
            console.err(err);
          });
        fetchPlantDetails();  
      }, [plantId]);

  if (error) {
    return <div>Error fetching plant details: {error.message}</div>;
  }

  if (!plantDetails) {
    return <div>Loading plant details...</div>;
  }

  return (
    <div>
      <h1>{plantDetails.name}</h1>
      <p>{plantDetails.description}</p>
      {/* Render other plant details */}
    </div>
  );
};

export default ViewPlantDetail;


/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPlantDetail = () => {
  const [plantDetails, setPlantDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/plants/${plantId}`); 
        setPlantDetails(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchPlantDetails();
  }, []);

  if (error) {
    return <div>Error fetching plant details: {error.message}</div>;
  }

  if (!plantDetails) {
    return <div>Loading plant details...</div>;
  }

  // Render the plant details component
  return (
    <div>
      <h1>{plantDetails.name}</h1>
      <p>{plantDetails.description}</p>
     
    </div>
  );
};

export default ViewPlantDetail; */


/* import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewPlantDetail({ plantId, onClose }) {
  const [plant, setPlant] = useState(null);

  useEffect(() => {

    axios.get(`http://localhost:8000/api/plants/plant-details`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) => {
        console.error('Error fetching plant details:', error);
      });
  }, [plantId]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="plant-detail">
      <h3>{plant.botanical_name}</h3>
      <p>{plant.description}</p>
      
      

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ViewPlantDetail;
  */
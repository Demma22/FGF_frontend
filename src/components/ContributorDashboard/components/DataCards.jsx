import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from '@mantine/core';

const DataCards = () => {
  const [catalogs, setCatalogs] = useState([
    'animals',
    'plants',
    'culture',
    // Add more catalogs as needed
  ]);

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};

      for (const catalog of catalogs) {
        const url = `http://localhost:8000/api/count-entries/${catalog}`;

        try {
          const response = await axios.get(url);
          newData[catalog] = response.data;
        } catch (error) {
          console.error(`Error fetching data for ${catalog}:`, error);
        }
      }

      setData(newData);
    };

    fetchData();
  }, [catalogs]);

  return (
    <Container className='container' containerFluid>
      {/* Cards Section */}
      <section className="py-5 card-container">
        {catalogs.map((catalog, catalogIndex) => (
          <div key={catalogIndex} className="container mx-auto flex flex-wrap justify-center lg:space-x-10">
            {data[catalog]?.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-1 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full object-cover rounded-t-lg mb-4 card-image"
                />
                <h2 className="text-2xl font-semibold mb-2">{catalog}</h2>
                {/* Use catalog as card title */}
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </Container>
  );
};

export default DataCards;

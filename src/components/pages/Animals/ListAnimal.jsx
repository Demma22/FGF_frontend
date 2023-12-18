import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Image, Title, Text, Container, Card, Badge, Group, Grid } from '@mantine/core';
import ViewAnimalDetail from './ViewAnimalDetail';
import { Header2 } from '../../Header2';
import Loading from '../../Loader/Loader'; // Adjust the import path based on your project structure

import Search from '../../Search/Search';
import './Animal.css';

export default function ListAnimal() {
  const navigate = useNavigate();
  const [animals, setAnimals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (category) => {
      // Simulating API request
      try {
        const apiUrl = `https://fgfbackend.onrender.com/api/v1/${category}/`;
        const response = await axios.get(apiUrl);
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    const loadData = async () => {
      try {
        const animalData = await fetchData('animals');
        setAnimals(animalData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    loadData();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setNoResults(results.length === 0);
  };

  return (
    <>
      {loading && <Loading />} {/* Show Loading component while data is being fetched */}
      <Header2 />
      <Container className="container px-2 pt-10" container-fluid="true" id="">
        <Container className="container pt-1 px-50" id="">
          <Title order={3}> UGANDA'S BIO-DIVERSITY </Title>
          <Search onSearchResults={handleSearchResults} category="animals" searchFields={['english_name', 'unique_habitat', 'scientific_name', 'areas_in_Uganda']} />
        </Container>
        <Container className="container px-10" container-fluid="true" id="">
          <div className="row d-flex flex-wrap">
            {noResults ? (
              <div style={{ textAlign: 'center', color: '#7C7C7C', fontSize: '1.2rem', marginTop: '20px' }}>
                🌿 Sorry, we couldn't find any results matching your search. 🌿
              </div>
            ) : (
              (searchResults.length > 0 ? searchResults : animals).map((animal) => (
                <div key={animal.id} className="col-md-4 mb-4">
                  <Link to={`/ViewAnimalDetail/${animal.id}`}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder className="flex-fill" id="list_card">
                      <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500} id="titles">
                          {animal.english_name}
                        </Text>
                        <Badge color="orange" variant="light">
                          {animal.scientific_name}
                        </Badge>
                      </Group>
                      <div className="div_content" id="titles">
                        <Text size="sm">{animal.animal_name}</Text>
                      </div>
                      <div className="div_content" id="list_card">
                        <Text>Found in: {animal.areas_in_Uganda}</Text>
                        <Text>Habitat : {animal.unique_habitat}</Text>
                      </div>
                      <Card.Section>
                        <Image
                          src={animal.image }//{animal.image_url ? animal.image_url : 'https://placehold.co/600x400?text=Placeholder'}
                          height={260}
                          alt={animal.english_name}
                        />
                      </Card.Section>
                      <Button type="" color="green.0" variant="filled" c="black" fullWidth mt="md" radius="md">
                        View More
                      </Button>
                    </Card>
                  </Link>
                </div>
              ))
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}

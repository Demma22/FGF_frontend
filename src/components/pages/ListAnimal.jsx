import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Image, Title, Text, Container, Card, Badge, Group, Grid } from '@mantine/core';
import ViewAnimalDetail from './ViewAnimalDetail';

import { Layout } from '../Layout';
import Search from '../Search/Search';
import "./Animal.css"
import { Layout2 } from '../Layout2';
import { Header } from '../Header';


export default function ListAnimal() {
  const navigate = useNavigate();
  const [animals, setAnimals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const animalCategoryData = {
    apiUrl: 'http://127.0.0.1:8000/api/animals/',
    searchCriteria: ['english_name', 'local_names', 'scientific_name'],
  };

  const categories = ['animals', 'plants', 'cultures'];

  useEffect(() => {
    axios
      .get(animalCategoryData.apiUrl)
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    axios
      // .get('https://fgf-app.onrender.com/api/animals/')
      .get('http://localhost:8000/api/animals/')
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    // <Layout>
    <Layout2>  
      <Container className='container' id="">
        <Title order={3}> UGANDA'S BIO-DIVERSITY </Title> 
        {/* <Search onSearchResults={handleSearchResults} categories={categories} />  */}
      </Container>
      <Container className='container' container-fluid='true' id="">
      <div className='row d-flex flex-wrap'>
      {/* {animals.map((animal) => ( */}
        {(searchResults.length > 0 ? searchResults : animals).map((animal) => (
        
        <div key={animal.id} className="col-md-4 mb-4">
        {/* <div className="row" > */}
          {/* <div className="col-md-4 mb-4">  */}
          
          <Link to={`/ViewAnimalDetail/${animal.id}`}>
            <Card shadow="sm" padding="lg" radius="md" withBorder className="flex-fill" id='list_card'>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} id="titles">
                  {animal.english_name}
                </Text>
                <Badge color="orange" variant="light">
                  {animal.scientific_name}
                </Badge>
              </Group>
              <div className="div_content" id="titles">
                <Text size="sm">
                  {animal.animal_name} 
                </Text>
              </div>
              <div className="div_content" id="list_card">
 
              
                {/* <Text>Scientific Name : {animal.scientific_name}</Text> */}
                <Text>Found in: {animal.areas_in_Uganda}</Text>
                <Text>Habitat : {animal.unique_habitat}</Text>
              </div>
              {/* <Card.Section>{animal.description}</Card.Section> */}
              <Card.Section>
                <Image
                  src= "imgs/Rhinos.jpg" //{animal.image_url ? animal.image_url : 'https://placehold.co/600x400?text=Placeholder'}
                  height={260}
                  alt={animal.english_name}
                />
              </Card.Section>
              <Button type="" color="green.0" variant="filled" c="black" fullWidth mt="md" radius="md">
                View More
              </Button>
            </Card>
          </Link>
   
        {/* ))} */}
        </div>
        ))}
        </div> 
      </Container>
    {/* </Layout> */}
    </Layout2>
  );
}

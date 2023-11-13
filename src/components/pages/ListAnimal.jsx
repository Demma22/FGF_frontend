import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Image, Text, Card, Badge, Group, Grid } from '@mantine/core';
import ViewAnimalDetail from './ViewAnimalDetail';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout';
import Search from '../Search/Search';

export default function ListAnimal() {
  const navigate = useNavigate();
  const [animals, setAnimals] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const animalCategoryData = {
    apiUrl: 'https://fgf-app.onrender.com/api/animals/animals/',
    searchCriteria: ['english_name', 'description', 'scientific_name'],
  };

  const categories = ['animals', 'plants', 'cultures'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(animalCategoryData.apiUrl);
        setAnimals(response.data);
      } catch (error) {
        console.error(error);
      }
    };})
    
    useEffect(() => {
      if (searchResults.length > 0) {
        setAnimals(searchResults);
      } else {
        // Fetch all animals if there are no search results
        const fetchData = async () => {
          try {
            const response = await axios.get(animalCategoryData.apiUrl);
            setAnimals(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }
    }, [searchResults, animalCategoryData.apiUrl]);
    

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <Layout>
      <Grid>
        <Grid.Col span={12}>
          <Search
            onSearchResults={handleSearchResults}
            categories={categories}
          />
        </Grid.Col>
        {(searchResults.length > 0 ? searchResults : animals).map((animal) => (
          <Grid.Col span={4} key={animal.id}>
            <Link to={`/ViewAnimalDetail/${animal.id}`}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ backgroundColor: '#112A00', color: 'white' }}
              >
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} id="titles">
                    {animal.english_name}
                  </Text>
                  <Badge color="orange" variant="light">
                    {animal.description}
                  </Badge>
                </Group>
                <div className="div_content" id="titles">
                  <Text size="sm">
                    {animal.names} ({animal.language})
                  </Text>
                  <Text>Scientific Name : {animal.scientific_name}</Text>
                  <Text>Areas in Uganda : {animal.areas_in_Uganda}</Text>
                  <Text>Habitat : {animal.unique_habitat}</Text>
                </div>
                <Card.Section>{animal.description}</Card.Section>
                <Card.Section>
                  <Image
                    src={
                      animal.image_url
                        ? animal.image_url
                        : 'https://fastly.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo'
                    }
                    height={260}
                    alt={animal.english_name}
                  />
                </Card.Section>
                <Button
                  type=""
                  color="green.0"
                  variant="filled"
                  c="black"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  View More
                </Button>
              </Card>
            </Link>
          </Grid.Col>
        ))}
        {selectedAnimal && selectedAnimal.id && (
          <ViewAnimalDetail
            animalId={selectedAnimal.id}
            onClose={closeAnimalDetail}
          />
        )}
      </Grid>
    </Layout>
  );
}

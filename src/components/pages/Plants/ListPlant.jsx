import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Badge, Group, Container, Title, Grid } from "@mantine/core";
import { Link } from 'react-router-dom';
import ViewPlantDetail from './ViewPlantDetail';
import { Layout } from "../../Layout"
import "./Plant.css"
import { Layout2 } from '../../Layout2';
import Search from '../../Search/Search';
import { Header2 } from '../../Header2';
import Loader from '../../Loader/Loader'; // Import the Loader component

export default function ListPlant() {
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);
  const [image, getImageFile] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const apiUrl = `http://localhost:8000/api/${category}/`;
        const response = await axios.get(apiUrl);
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    const loadData = async () => {
      try {
        const plantData = await fetchData('plants');
        setPlants(plantData);
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false on error
      }
    };

    loadData();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setNoResults(results.length === 0);
  };

  if (loading) {
    return <Loader />; // Display the loading animation while data is loading
  }


  return (
    <>
    <Header2 />
      <Container className='container px-20 pt-10' container-fluid='true' id="">
      <Container className='container pt-1 px-10' id="">
        <Title order={3}> UGANDA'S CULTURAL-DIVERSITY </Title> 
        <Search onSearchResults={handleSearchResults} category="plants" searchFields={["botanical_name", 'habitat', 'life_form','region_in_Uganda' ]}/>
      </Container>
      <Container className='container pt-1 px-10'>
        <div className='row d-flex flex-wrap'>
        
          {/* {plants.map((plant) => ( */}
           {noResults ? (
              <div style={{ textAlign: 'center', color: '#7C7C7C', fontSize: '1.2rem', marginTop: '20px' }}>
              🌿 Sorry, we couldn't find any results matching your search. 🌿
            </div>
            
            ) : (
              (searchResults.length > 0 ? searchResults : plants).map((plant) => (
  
            <div className="col-md-4 mb-4" key={plant.id} >
              <Link to={`/ViewPlantDetail/${plant.id}`} >

                <Card shadow="sm" padding="lg" radius="md" withBorder className="flex-fill" id='list_card'> 
                
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} id='titles'>{plant.botanical_name}</Text>
                  <Badge color="orange" variant="light">
                    {plant.medicinal_plant}
                  </Badge>
                </Group>

                {/* <Text size="sm" c="dimmed"> */}
                <div className='div_content' id='titles'>
                  <Text size="sm">
                    {/* {plant.names}  */}
                  </Text>
                  <Text>{plant.language}</Text>
                  <Text>Region: {plant.region_in_Uganda}</Text>
                  <Text>Habitat: {plant.habitat}</Text>
                  <Text>Life Form: {plant.life_form}</Text>
                </div>
                

                {/* <Card.Section>
                  {plant.description}
                </Card.Section> */}

                <Card.Section>
                  <Image
                    //src={plant.image_url ? plant.image_url : "https://placehold.co/600x400?text=Placeholder"}           
                    //src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    src={plant.image_url ? plant.image_url :"https://fastly.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo"}
                    height={260}
                    alt="plant.image.name"
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
                // onClick={() => openPlantDetail(plant.id)} // Open detailed view
                
                >
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

  
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Badge, Group, Grid } from "@mantine/core";
import ViewAnimalDetail from './ViewAnimalDetail';
import { Link } from 'react-router-dom';
import { Layout } from "../Layout"
import "./Plant.css"

export default function ListAnimal () {  
    const navigate = useNavigate();
    const [animals, setAnimals] = useState([]);
    const [image, getImageFile] = useState(null);

    //const url = 'https://fgf-app.onrender.com/api/animals/';
    const url = 'https://fgf-app.onrender.com/api/animals/animals/';

    const image_url = 'https://fgf-app.onrender.com/api/api/animals/id/animal_images/';

    useEffect(() => {
        axios.get(url)  
          
          .then((response) => {
            setAnimals(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const [selectedAnimal, setSelectedAnimal] = useState(null);    

  return (
    <Layout>
      <Grid>
        
        {animals.map((animal) => (
          <Grid.Col span={4} key={animal.id} >
            <Link to={`/ViewAnimalDetail/${animal.id}`} >

              <Card shadow="sm" padding="lg" radius="md" withBorder style={{ backgroundColor: '#112A00', color:'white' }}> 
              
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} id='titles'>{animal.english_name}</Text>
                <Badge color="orange" variant="light">
                  {animal.description}
                </Badge>
              </Group>

              {/* <Text size="sm" c="dimmed"> */}
              <div className='div_content' id='titles'>
                <Text size="sm">
                  {animal.names} ({animal.language})
                </Text>
                <Text>Scientific Name: {animal.scientific_name}</Text>
                <Text>Habitat: {animal.areas_in_Uganda}</Text>
                <Text>Life Form: {animal.unique_habitat}</Text>
              </div>
              

              <Card.Section>
                {animal.description}
              </Card.Section>

              <Card.Section>
                <Image
                  //src={plant.image_url ? plant.image_url : "https://placehold.co/600x400?text=Placeholder"}           
                  //src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  src={animal.image_url ? animal.image_url :"https://fastly.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo"}
                  height={260}
                  alt="animal.image.name"
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
          </Grid.Col>
        ))}      

      {selectedAnimal && selectedAnimal.id && (
        <ViewAnimalDetail animalId={selectedAnimal.id} onClose={closeAnimalDetail} />

      )}
      
      </Grid>
      
    </Layout>
    
  )
  }

  
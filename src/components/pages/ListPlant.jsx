import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Badge, Group, Grid } from "@mantine/core";
import { Link } from 'react-router-dom';
import ViewPlantDetail from './ViewPlantDetail';
import { Layout } from "../Layout"
import "./Plant.css"

export default function ListPlant () {  
    const navigate = useNavigate();
    const [plants, setPlants] = useState([]);
    const [image, getImageFile] = useState(null);

    //const url = 'https://fgf-app.onrender.com/api/plants/';
    const url = 'http://localhost:8000/api/plants/';

    const image_url = 'http://localhost:8000/api/plants/id/plant_images/';

    useEffect(() => {
        axios.get(url)  
          
          .then((response) => {
            setPlants(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const [selectedPlant, setSelectedPlant] = useState(null);    

  return (
    <Layout>
      <Grid>
        
        {plants.map((plant) => (
          <Grid.Col span={4} key={plant.id} >
            <Link to={`/ViewPlantDetail/${plant.id}`} >

              <Card shadow="sm" padding="lg" radius="md" withBorder style={{ backgroundColor: '#112A00', color:'white' }}> 
              
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} id='titles'>{plant.botanical_name}</Text>
                <Badge color="orange" variant="light">
                  {plant.medicinal_plant}
                </Badge>
              </Group>

              {/* <Text size="sm" c="dimmed"> */}
              <div className='div_content' id='titles'>
                <Text size="sm">
                  {plant.names} ({plant.language})
                </Text>
                <Text>Region: {plant.region_in_Uganda}</Text>
                <Text>Habitat: {plant.habitat}</Text>
                <Text>Life Form: {plant.life_form}</Text>
              </div>
              

              <Card.Section>
                {plant.description}
              </Card.Section>

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
          </Grid.Col>
        ))}      

      {selectedPlant && selectedPlant.id && (
        <ViewPlantDetail plantId={selectedPlant.id} onClose={closePlantDetail} />

      )}
      
      </Grid>
      
    </Layout>
    
  )
  }

  
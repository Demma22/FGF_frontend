import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Badge, Group, Grid } from "@mantine/core";

import { Layout } from "../Layout"

export default function ListPlant () {  
    const navigate = useNavigate();
    const [plants, setPlants] = useState([]);
        /* {
        botanical_name:"",
        medicinal_plant:"",
        names:"",
        language:"",
        description: "",
        region_in_Uganda:"",
        habitat:"",
        life_form:"",
        health_issues: "",
        part_used: "",
        preparation_steps: "",
        dosage:"",
        contraindications:"", 
        shelf_life: "",
        social_value: "",
        economical_value:"",
        cultural_value: "",
        other_value: "",
        
        notes: "", 
        contributor_name: "",
        citation: ""
    }); */

    const [image, getImageFile] = useState(null);

    /* const handleChange = (e) => {
        const {name, value } = e.target;
        setPosts((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleImageChange = (files) => {
        if (files && files.length > 0) {
          setImageFile(files[0]);
        }
    }; */

    //const url = 'https://fgf-app.onrender.com/api/plants/';
    const url = 'http://localhost:8000/api/plants/';
    const image_url = 'http://localhost:8000/api/plants/id/plant_images/';

    useEffect(() => {
        axios.get(url)  
          .then((response) => {
            setPlants(response.data);
          })
          .catch((error) => {
            console.err(err);
          });
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
            
    };

  return (
    <Layout>
        {/* <div>
            <h1>Plant List</h1>
            {plants.map((plant) => (
                <Card key={plant.id} shadow="xs" style={{ marginBottom: '20px' }}>
                <Text size="xl" weight={700}>{plant.botanical_name}</Text>
                <Text>{plant.medicinal_plant}</Text>
                <Text size="xl" weight={500}>{plant.names} ({plant.language})</Text>
                <Text size="xl" weight={400}>{plant.description}</Text>
                  <Image 
                      radius="md"
                      h={200}
                      w={100}
                      fit="contain"
                      src={plant.image_url ? plant.image_url : "https://placehold.co/600x400?text=Placeholder"} 
                      // alt={plant.image.name} 
                    />
                <Text>Region: {plant.region_in_Uganda}</Text>
                <Text>Habitat: {plant.habitat}</Text>
                <Text>Life Form: {plant.life_form}</Text>
                <Text>Health Issues: </Text>
                    <Text>{plant.health_issues}</Text>
                <Text>Part Used: {plant.part_used}</Text>
                <Text>Preparation Steps: {plant.preparation_steps}</Text>
                <Text>Dosage: {plant.dosage}</Text>
                <Text>Contra Indications: {plant.contraindications}</Text>
                <Text size="xl" weight={500}>Shelf Life: {plant.shelf_life}</Text>
                <Text>Social Value: </Text>
                    <Text>{plant.social_value}</Text>
                <Text>Economic Value: </Text>
                    <Text>{plant.economical_value}</Text>
                <Text>Cultural Value: {plant.cultural_value}</Text>
                <Text>Other Value: </Text>
                    <Text> {plant.other_value}</Text> 
                <Text size="xl" weight={500}>Notes:</Text> 
                    <Text>{plant.notes}</Text>
                <Text>Contributor Name: {plant.contributor_name}</Text>
                <Text>Citation: {plant.citation}</Text>
                </Card>
            ))}
        </div> */}

      <Grid>
        
        {plants.map((plant) => (
          <Grid.Col span={4} key={plant.id} >
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ backgroundColor: '#112A00', color:'white' }}> 
            {/* #8EBD6C */}
              

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} >{plant.botanical_name}</Text>
                <Badge color="orange" variant="light">
                  {plant.medicinal_plant}
                </Badge>
              </Group>

              {/* <Text size="sm" c="dimmed"> */}
              <Text size="sm"y>
                {plant.names} ({plant.language})
              </Text>
              <Text>Region: {plant.region_in_Uganda}</Text>
              <Text>Habitat: {plant.habitat}</Text>
              <Text>Life Form: {plant.life_form}</Text>

              <Card.Section>
                {plant.description}
              </Card.Section>

              <Card.Section>
                <Image
                  //src={plant.image_url ? plant.image_url : "https://placehold.co/600x400?text=Placeholder"}           
                  //src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  src={plant.image_url ? plant.image_url :"https://fastly.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU"}
                  height={260}
                  alt="plant.image.name"
                />
              </Card.Section>

              <Button type="" color="green.0" variant="filled" c="black" fullWidth mt="md" radius="md">
                  View More
              </Button>
            </Card>
          </Grid.Col>
        ))}      
    
      </Grid>

    </Layout>
    
  )
  }

  
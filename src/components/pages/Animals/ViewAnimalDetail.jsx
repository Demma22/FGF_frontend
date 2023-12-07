// ViewAnimalDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Image, Title, Button, Text } from '@mantine/core';
import { Layout } from '../../Layout';
import "./Animal.css"
import { Layout2 } from '../../Layout2';
import { Header2 } from '../../Header2';
import GoogleMap from '../../GoogleMap/GoogleMap';
import Loading from '../../Loader/Loader'; // Import the Loading component

const ViewAnimalDetail = () => {
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/animals/" + id;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
        setError(error);
      }
    };

    fetchData();

  }, [id]);  
      
  if (loading) {
    return <Loading />; // Display the loading animation while data is loading
  }

  if (error) {
    return <div>Error fetching Animal details: {error.message}</div>;
  }

  return (
    <>
      <Header2 />
      <Container className='container px-20 pt-10'>
        <div shadow="sm" id='content'>
          <Title>{data.english_name}</Title>
          <div>
            <p>{data.animal_name}</p>
            <p>{data.scientific_name}</p>
            <p>{data.language}</p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p id='sub_tile_no_spc' style={{ marginRight: '8px' }}>Habitat:</p>
            <Text size="sm" c="dimmed" id='titles'>{data.unique_habitat}</Text>
          </div>
            
          <Card.Section>
            <Image
              src={data.image_url ? data.image_url :"https://placehold.co/600x400?text=Placeholder"}
              height={260}
              alt="data.image.name"
              radius={4}
            />
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>About</Title>
            <p>{data.description}</p>
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>Contributors Notes</Title>
            <p>{data.notes}</p>
            <pre id='contributor'> By: {data.contributor_name}</pre>
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>Citation</Title>
            <p>{data.citation}</p>
          </Card.Section>
        </div>

        <Link to="#" onClick={() => window.history.back()}>
          <Button type='' id='back_btn'>
            Back
          </Button>
        </Link> 
      </Container>
    </>
  );
};

export default ViewAnimalDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import "./Plant.css"
import { Container, Card, Image, Title, Button, Text } from '@mantine/core';
import { Layout } from '../Layout';

const ViewPlantDetail = () => {
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/plants/" + id;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);  
      

  if (error) {
    return <div>Error fetching plant details: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading plant details...</div>;
  }

  return (
    <Layout>
      <Container className='container' container-fluid='true' shadow="sm" id='content'>
        <Title>{data.botanical_name}</Title>
        <div>
          {data.names}
          {data.language}
          {data.description}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p id='sub_tile_no_spc' style={{ marginRight: '8px' }}>Life Form:</p>
          <Text size="sm" c="dimmed" id='titles'>{data.life_form}</Text>
        </div>
          
        
          <Card.Section>
            <Image
              //src={data.image_url ? data.image_url : "https://placehold.co/600x400?text=Placeholder"}           
              //src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              src={data.image_url ? data.image_url :"https://fastly.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo"}
              height={260}
              alt="data.image.name"
              radius={4}
            />
          </Card.Section>

          {/* Data missing in plant model */}
          <Card.Section id='card_content'>
            <Title order={5}>About</Title>
            <p>{data.description}</p>
            
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>Common Uses</Title>
            <p>{data.other_value}</p>
            
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>Contributors Notes</Title>
            <p>{data.notes}</p>
            <pre id='contributor'> By: {data.contributor_name}</pre>
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>Citation</Title>
            <pre>{data.citation}</pre>
          </Card.Section>
      </Container>
      <Link to="#" onClick={() => window.history.back()}>
        <Button type='' id='back_btn'>
            Back
        </Button>

      </Link>
      
      
    </Layout>
    
  );
};

export default ViewPlantDetail;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Image, Title, Button, Text } from '@mantine/core';
import { Layout } from '../../Layout';
import "./Culture.css"


const ViewCultureDetail = () => {
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/cultures/" + id;
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
    return <div>Error fetching culture details: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading culture details...</div>;
  }

  return (
    <Layout>
      <Container className='container' container-fluid='true' shadow="sm" id='content'>
        <Title>{data.ethnic_group_name}</Title>
        <div>
            <Text>Region: {data.region_in_Uganda}</Text>
            <Text>{data.number_of_languages} Dialects</Text>
            {/* <Text>Ethnicity: {data.ethnicity_name}</Text> */}
          {/* {data.description} */}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p id='sub_tile_no_spc' style={{ marginRight: '8px' }}>Ethnicity:</p>
          <Text size="sm" c="dimmed" id='titles'>{data.ethnicity_name}</Text>
        </div>
          
        
          <Card.Section>
            <Image
              src={data.image_url ? data.image_url : "https://placehold.co/600x400?text=Placeholder"}           
              //src={data.image_url ? data.image_url : "imgs/Buganda-dance.jpg"}
              height={260}
              alt="data.image.name"
              radius={4}
            />
          </Card.Section>

          {/* Data missing in plant model */}
          <Card.Section id='card_content'>
            <Title order={5}>About</Title>
            {/* <p>{data.description}</p> */}
            
          </Card.Section>

          <Card.Section id='card_content'>
            <Title order={5}>Heritage</Title>
            
            
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
      </Container>
      <Link to="#" onClick={() => window.history.back()}>
        <Button type='' id='back_btn'>
            Back
        </Button>

      </Link>
      
      
    </Layout>
    
  );
};

export default ViewCultureDetail;


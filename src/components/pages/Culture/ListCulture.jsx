import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Badge, Group, Title, Container, Grid } from "@mantine/core";
import { Link } from 'react-router-dom';
import ViewCultureDetail from './ViewCultureDetail';
import { Layout } from "../../Layout"
import "./Culture.css"
import { Layout2 } from '../../Layout2';

export default function ListCulture () {  
    const navigate = useNavigate();
    const [cultures, setCultures] = useState([]);
    const [image, getImageFile] = useState(null);

    //const url = 'https://fgf-app.onrender.com/api/cultures/';
    const url = 'http://localhost:8000/api/cultures/';

    const image_url = 'http://localhost:8000/api/cultures/id/culture_images/';

    useEffect(() => {
        axios.get(url)  
          
          .then((response) => {
            setCultures(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
   

  return (
    // <Layout>
    <Layout2>  
      <Container className='container' id="">
        <Title order={3}> UGANDA'S CULTURAL-DIVERSITY </Title> 
        {/* <Search onSearchResults={handleSearchResults} categories={categories} />  */}
      </Container>
      <Container className='container' container-fluid='true' id="">
      <div className='row d-flex flex-wrap'>
      
        {cultures.map((culture) => (
        //   <div className='row d-flex flex-wrap' key={culture.id} >
            <div key={culture.id} className="col-md-4 mb-4">
                <Link to={`/ViewCultureDetail/${culture.id}`} >
                
                <Card shadow="sm" padding="lg" radius="md" withBorder className="flex-fill" id='list_card_culture' > 
                
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500} id='titles'>{culture.ethnic_group_name}</Text>
                        <Badge color="orange" variant="light">
                        {culture.number_of_ethnicities }
                        </Badge>
                    </Group>
                    
                    {/* <Text size="sm" c="dimmed"> */}
                    <div className='div_content' id='titles'>
                        <Text size="sm">{culture.ethnicity_name}</Text>
                        <Text>Region: {culture.region_in_Uganda}</Text>
                        <Text>{culture.number_of_languages} Dialects</Text>
                        <Text>Ethnicity: {culture.ethnicity_name}</Text>
                    </div>

                    <Card.Section>
                        {culture.description}
                    </Card.Section>

                    <Card.Section>
                        <Image
                        //src={culture.image_url ? culture.image_url : "https://placehold.co/600x400?text=Placeholder"}           
                        src={culture.image_url ? culture.image_url : "imgs/Buganda-dance.jpg"}
                        height={260}
                        alt="culture.image.name"
                        />
                    </Card.Section>

                        <Button 
                        type="" 
                        color="green.6" 
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
            </div>
            ))}      
        </div>
      </Container>

    </Layout2>  
  //  </Layout>
    
  )
  }

  
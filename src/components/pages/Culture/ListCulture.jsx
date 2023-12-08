import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Badge, Group, Title, Container, Grid } from "@mantine/core";
import { Link } from 'react-router-dom';
import ViewCultureDetail from './ViewCultureDetail';
import { Layout } from "../../Layout"
import "./Culture.css"
import { Layout2 } from '../../Layout2';
import Search from '../../Search/Search';
import { Header2 } from '../../Header2';
import Loading from '../../Loader/Loader';


const ListCulture = () => {
  const [cultures, setCultures] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:8000/api/cultures/';
        const response = await axios.get(apiUrl);
        setCultures(response.data);
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setNoResults(results.length === 0);
  };

  if (loading) {
    return <Loading />; // Display the loading animation while data is loading
  }

  return (
    <>
    <Header2 />  
    <Container className="container px-2 pt-10" container-fluid="true" id="">
        <Container className="container pt-1 px-50" id="">
        <Title order={3}> UGANDA'S CULTURAL-DIVERSITY </Title> 
        <Search onSearchResults={handleSearchResults} category="cultures" searchFields={["ethnic_group_name", "region_in_Uganda" ]}/>
      </Container>
      <Container className='container pt-1 px-10'>
      <div className='row d-flex flex-wrap'>
      
      {noResults ? (
              <div style={{ textAlign: 'center', color: '#7C7C7C', fontSize: '1.2rem', marginTop: '20px' }}>
              🌿 Sorry, we couldn't find any results matching your search. 🌿
            </div>
            
            ) : (
              (searchResults.length > 0 ? searchResults : cultures).map((culture) => (
        //   <div className='row d-flex flex-wrap' key={culture.id} >
            <div key={culture.id} className="col-md-4 mb-4">
                <Link to={`/ViewCultureDetail/${culture.id}`} >
                
                <Card shadow="sm" padding="lg" radius="md" withBorder className="flex-fill" id='list_card' > 
                
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
                        <Text>Dialects: {culture.number_of_languages} </Text>
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
            </div>
            ))
          )}      
        </div>
      </Container>
      </Container>
    </>
    
  )
  }

  export default ListCulture;
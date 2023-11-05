import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Image, Text, Card, Title, Group, Grid } from "@mantine/core";

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

        <div>
            <h1>Plant List</h1>
            {plants.map((plant) => (
                <Card key={plant.id} shadow="xs" style={{ marginBottom: '20px' }}>
                <Text size="xl" weight={700}>{plant.botanical_name}</Text>
                <Text>{plant.medicinal_plant}</Text>
                <Text size="xl" weight={500}>{plant.names} </Text>
                <Text>Language: {plant.language}</Text>
                <Text size="xl" weight={400}>Description: {plant.description}</Text>

                <Image src={plant.image_url} alt={plant.botanical_name} />
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
                {/* Include other fields as needed */}
                </Card>
            ))}
        </div>

        {/* <Title order={3} ta="center"> PLANTS</Title>       
        <Grid columns={24}>
            <Grid.Col span={22}>  
                
                <div>
                    <ul>
                        {plants.map((plant) => (
                        <li key={plant.id}>
                            <div>Botanical Name: {plant.botanical_name}</div>
                            <div>Medicinal Plant: {plant.medicinal_plant}</div>
                            <div>Local Name: {plant.names}</div>
                            <div>Language: {plant.language}</div>
                            <div>Description: {plant.description}</div>
                            <div>Region: {plant.region_in_Uganda}</div>
                            <div>Habitat: {plant.habitat}</div>
                            <div>Life Form: {plant.life_form}</div>
                            <div>Health Issues: {plant.health_issues}</div>
                            <div>Part Used: {plant.part_used}</div>
                            <div>Preparation Steps: {plant.preparation_steps}</div>
                            <div>Dosage: {plant.dosage}</div>
                            <div>Contra Indications: {plant.contraindications}</div>
                            <div>Shelf Life: {plant.shelf_life}</div>
                            <div>Social Value: {plant.social_value}</div>
                            <div>Economic Value: {plant.economical_value}</div>
                            <div>Cultural Value: {plant.cultural_value}</div>
                            <div>Other Value: {plant.other_value}</div> 
                            <div>Notes: {plant.notes}</div>
                            <div>Contributor Name: {plant.contributor_name}</div>
                            <div>Citation: {plant.citation}</div>
                            
                        </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <FileInput
                        label="Image"
                        files={image ? [image] : []}
                        onChange={handleImageChange}
                    />
                    {image && <Text>{image.name}</Text>}
                </div>
                
                <div>
                    <Button color="lime.6" type='' variant="filled" radius="md"> Back </Button>
                </div>
                   
            </Grid.Col>
        </Grid> */}
      
    </Layout>
    
  )
  }

  


  /* const [botanical_name, setBotName] = useState("");
    const [medicinal_plant, setMedPlant] = useState("");
    const [names, setNames] = useState(""); 
    const [language, setLanguage] = useState("")
    const [description, setDescrip] = useState(""); 
    const [region_in_Uganda, setRegion] = useState("");
    const [habitat, setHabitat] = useState("");
    const [life_form, setLifeForm] = useState("");
    const [health_issues, setHealthIssues] = useState("");
    const [part_used, setPartUsed] = useState("");
    const [preparation_steps, setSteps] = useState("");
    const [dosage, setDose] = useState("");
    const [contraindications, setContIndic] = useState("");
    const [shelf_life, setShelfLife] = useState("");    
    const [social_value, setSocialVal] = useState("");
    const [economical_value, setEcoVal]  = useState(""); 
    const [cultural_value, setCulturalVals] = useState(""); 
    const [other_value, setOtherVal] =  useState("");
    
    const [notes, setNotes] = useState("");
    const [contributor_name, setContribName] = useState("");
    const [citation, setCitation] = useState(""); */

    

/*
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Clear the form inputs
        setBotName('');
        setMedPlant(''); 
        setNames('');
        setLanguage('');
        setDescrip('');
        setRegion('');
        setHabitat('');
        setLifeForm('');
        setHealthIssues('');
        setPartUsed('');
        setSteps('');
        setDose('');
        setContIndic('');
        setShelfLife('');
        setSocialVal('');
        setEcoVal('');
        setCulturalVals('');
        setOtherVal('');
        setNotes('');
        setContribName('');
        setCitation('');
      
        try {
          const response = await axios.post(url, {
            botanical_name: botanical_name,
            medicinal_plant: medicinal_plant,
            names: names,
            language: language,
            description: description,
            region_in_Uganda: region_in_Uganda,
            habitat: habitat,
            life_form: life_form,
            health_issues: health_issues,
            part_used: part_used,
            preparation_steps: preparation_steps,
            dosage: dosage,
            contraindications: contraindications,
            shelf_life: shelf_life,
            social_value: social_value,
            economical_value: economical_value,
            cultural_value: cultural_value, 
            other_value: other_value, 
            notes: notes,
            contributor_name: contributor_name,
          }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  
          if (response.ok) {
            navigate("/Layout")
          }else{
            console.error('Error Submitting details');
            navigate("/Plant")
          }
  
          
        } catch (error) {
          console.error('Error logging in:', error);
        }
      } */

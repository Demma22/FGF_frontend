import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Group, Grid } from "@mantine/core";

import { Layout } from "../Layout"


export default function Animal () {
    const [english_name, setEngName] = useState("");
    const [scientific_name, setsciName] = useState("");
    const [description, setDescrip] = useState(""); 
    const [areas_in_Uganda, setArea] = useState("");
    const [animal_classifications, setClass] = useState("");
    const [known_values, setValues] = useState(""); 
    const [value_details, setValDets] = useState("");
    const [unique_habitat, setHabitat] = useState("");
    const [threats, setThreats] = useState("");
    const [notes, setNotes] = useState("");
    const [contributor_name, setContribName] = useState("");

     
    /*state = {
        // Initially, no file is selected
        image: null
    };
     state = {
        // Initially, no file is selected
        video: null
    };
    state = {
        // Initially, no file is selected
        audio: null
    }; */

    const navigate = useNavigate();
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Clear the form inputs
        setEngName('');
        setLocalName('');
        setLanguage('')
        setsciName(''); 
        setDescrip('');
        setArea('');
        setClass('');
        setKingdom('');
        setSpecies('');
        setValues('');
        setValDets('');
        setHabitat('');
        setThreats('');
        setNotes('');
        setContribName('');
      
        try {
          const response = await axios.post('https://fgf-app.onrender.com/animals/', {
            english_name: english_name,
            animal_name: animal_name,
            language: language,
            scientific_name: scientific_name,
            description: description,
            areas_in_Uganda: areas_in_Uganda,
            animal_classifications: animal_classifications,
            kingdom_name: kingdom_name,
            species: species,
            known_values: known_values,
            value_details: value_details,
            unique_habitat: unique_habitat,
            threats: threats,
            notes: notes,
            contributor_name: contributor_name,
          });
  
          if (response.ok) {
            navigate("/Layout")
          }else{
            console.error('Error Submitting details');
            navigate("/Animal")
          }
  
          
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }

  return (
    <Layout>
        <Title order={3} ta="center"> ANIMALS FORM</Title>
           
        <Grid columns={24}>
            <Grid.Col span={22}>  
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextInput
                        label="English Name"
                        value={english_name}
                        onChange={(event) => setEngName(event.target.value)}
                        description="Enter Name of Animal"
                        error="*"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Name"
                        value={animal_name}
                        onChange={(event) => setEngName(event.target.value)}
                        description="Name in one of Uganda's Native Language"
                        error="*"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Language"
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Scientific Name"
                        value={scientific_name}
                        onChange={(event) => setsciName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Description"
                        value={description}
                        onChange={(event) => setDescrip(event.target.value)}
                        error="*"
                        />
                    </div>

                    <div>
                        <TextInput
                        label="Areas in Uganda"
                        value={areas_in_Uganda}
                        onChange={(event) => setArea(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Animal Classifications"
                        value={animal_classifications}
                        onChange={(event) => setClass(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Kingdom"
                        value={kingdom_name}
                        onChange={(event) => setKingdom(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Species"
                        value={species}
                        onChange={(event) => setSpecies(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Known Values"
                        value={known_values}
                        onChange={(event) => setValues(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Value Details"
                        value={value_details}
                        onChange={(event) => setValDets(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Unique Habitat"
                        value={unique_habitat}
                        onChange={(event) => setHabitat(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Threats"
                        value={threats}
                        onChange={(event) => setThreats(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        {/* Handle Images Here and other File uploads*/}
                    </div>
                   



                    <div>
                        <TextInput
                        label="Notes"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Contributor Name"
                        value={contributor_name}
                        onChange={(event) => setContribName(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <Button color="lime.6" type='' variant="filled" radius="md"> Submit </Button>
                    </div>
                    </form>
                </Grid.Col>
            </Grid>
      
    </Layout>
    
  )
  }
  
  //export default Animal
  
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Group, Grid } from "@mantine/core";

import { Layout } from "../Layout"


export default function PlantForm () {  
    const [botanical_name, setBotName] = useState("");
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
    const [citation, setCitation] = useState("");

    const navigate = useNavigate();
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
          const response = await axios.post('https://fgf-app.onrender.com/plants/', {
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
          });
  
          if (response.ok) {
            navigate("/Layout")
          }else{
            console.error('Error Submitting details');
            navigate("/Plant")
          }
  
          
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }

  return (
    <Layout>
        <Title order={3} ta="center"> PLANT FORM</Title>
           
        <Grid columns={24}>
            <Grid.Col span={22}>  
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextInput
                        label="Botanical Name"
                        value={botanical_name}
                        onChange={(event) => setBotName(event.target.value)}
                        description="Enter Name of Plant"
                        error="*"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Medicinal Plant"
                        value={medicinal_plant}
                        onChange={(event) => setMedPlant(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Names"
                        value={names}
                        onChange={(event) => setNames(event.target.value)}
                        description="Names by which the plant is known"
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
                        label="Description"
                        value={description}
                        onChange={(event) => setDescrip(event.target.value)}
                        error="*"
                        />
                    </div>

                    <div>
                        <TextInput
                        label="Areas in Uganda"
                        value={region_in_Uganda}
                        onChange={(event) => setRegion(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Habitat"
                        value={habitat}
                        onChange={(event) => setHabitat(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Life Form"
                        value={life_form}
                        onChange={(event) => setLifeForm(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Health Issues"
                        value={health_issues}
                        onChange={(event) => setHealthIssues(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Part Used"
                        value={part_used}
                        onChange={(event) => setPartUsed(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Preparation Steps"
                        value={preparation_steps}
                        onChange={(event) => setSteps(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Dosage"
                        value={dosage}
                        onChange={(event) => setDose(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Contra Indications"
                        value={contraindications}
                        onChange={(event) => setContIndic(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Shelf Life"
                        value={shelf_life}
                        onChange={(event) => setShelfLife(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Social Value"
                        value={social_value}
                        onChange={(event) => setSocialVal(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Economic Value"
                        value={economical_value}
                        onChange={(event) => setEcoVal(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Cultural Value"
                        value={cultural_value}
                        onChange={(event) => setCulturalVals(event.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Other Value"
                        value={other_value}
                        onChange={(event) => setOtherVal(event.target.value)}
                        
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

  
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Group, FileInput, Grid } from "@mantine/core";
import { Layout } from "../../Layout"

import './Culture.css'

export default function CreateEthnicity () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
        ethnicity_name: "",
        region_in_Uganda:"",
        language:"",
        food:"",
        staple_food:"",
        cuisine: "",
        cashcrop:"",
        universal_worship:"",
        denominations:"",
        universal_rituals: "",
        ceremonies: "",
        kingdom: "",
        chiefdom:"",

    });

    //initialise success message state
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setPosts((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const postData = {
            ethnicity_name: posts.ethnicity_name,
            region_in_Uganda: posts.region_in_Uganda,
            language: posts.language,
            food: posts.food,
            staple_food: posts.staple_food,
            cuisine: posts.cuisine,
            cashcrop: posts.cashcrop,
            universal_worship: posts.universal_worship,
            denominations: posts.denominations,
            universal_rituals: posts.universal_rituals,
            ceremonies: posts.ceremonies,
            kingdom: posts.kingdom,
            chiefdom: posts.chiefdom

        };
        
        axios
            // Use the 'posts' object to send data
          .post("http://127.0.0.1:8000/api/cultures/ethnicities/", postData, {
            headers: {
                "Content-Type": "application/json", 
              //"Content-Type": "multipart/form-data",
            },
        }) 

          .then((res) => {
            // Display success message and clear form
            setSuccessMessage("Kingdom created successfully!");
            
            // Clear the form inputs
            setPosts({
                ethnicity_name: "",
                region_in_Uganda:"",
                language:"",
                food:"",
                staple_food:"",
                cuisine: "",
                cashcrop:"",
                universal_worship:"",
                denominations:"",
                universal_rituals: "",
                ceremonies: "",
                kingdom: "",
                chiefdom:"",
                
            });
    
            // Navigate CreateCulture component
            navigate("/CreateCulture");
        })
          
          .catch((err) => console.log(err));
          
    };



  return (
    <Layout>
        
        <Title order={3} ta="center"> CULTURE</Title>
        
        <Grid columns={24}>
            <Grid.Col span={22}>  
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextInput
                        label="Ethnicity Name"
                        value={posts.ethnicity_name}
                        onChange={handleChange}
                        
                        name="ethnicity_name"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Region in Uganda"
                        value={posts.region_in_Uganda}
                        onChange={handleChange}
                        
                        name='region_in_Uganda'
                        />
                    </div>
        
                    <div>
                        <TextInput
                        label="Language"
                        value={posts.language}
                        onChange={handleChange}
                        name='language'
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Food"
                        value={posts.food}
                        onChange={handleChange}
                        name='food'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Staple Food"
                        value={posts.staple_food}
                        onChange={handleChange}
                        name='staple_food'
                        />
                    </div>

                    <div>
                        <TextInput
                        label="Cuisine"
                        value={posts.cuisine}
                        onChange={handleChange}
                        name='cuisine'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Cashcrop"
                        value={posts.cashcrop}
                        onChange={handleChange}
                        name='cashcrop'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Universal Worship"
                        value={posts.universal_worship}
                        onChange={handleChange}
                        name='universal_worship'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Denominations"
                        value={posts.denominations}
                        onChange={handleChange}
                        name='denominations'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Universal Rituals"
                        value={posts.universal_rituals}
                        onChange={handleChange}
                        name='universal_rituals'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Ceremonies"
                        value={posts.ceremonies}
                        onChange={handleChange}
                        name='ceremonies'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Kingdom"
                        value={posts.kingdom}
                        onChange={handleChange}
                        name='kingdom'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Chiefdom"
                        value={posts.chiefdom}
                        onChange={handleChange}
                        name='chiefdom'
                        />
                    </div>
         
                    <div>
                        <Button color="lime.6" type='' variant="filled" radius="md"> Next </Button>
                    </div>
                    </form>
                    {/* {successMessage && <div className="success-message">{successMessage}</div>} */}
                    <Text
                        className="success-message"
                        size="sm"
                        color="green"
                        style={{ marginTop: '10px' }}
                    >
                        {successMessage}
                    </Text> 
                    {/* <Popup message={successMessage} onClose={() => setSuccessMessage(null)} /> */}

                </Grid.Col>
            </Grid>
      
    </Layout>
    
  )
  }
  
  //export default Ethnicity
  
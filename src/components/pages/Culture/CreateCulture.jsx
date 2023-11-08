import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Button, TextInput, Text, Title, Group, FileInput, Grid } from "@mantine/core";
import { Layout } from "../../Layout"

import './Culture.css'

export default function CreateCulture () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
        ethnic_group_name: "",
        region_in_Uganda:"",
        number_of_ethnicities:"",
        number_of_languages: "",
        number_of_kingdoms:"",
        ethnicity_name:"",   
        
        //description: "",
        notes: "", 
        contributor_name: "",
        citation: ""
    });

    //initialise success message state
    const [successMessage, setSuccessMessage] = useState(null);

    //initialise image state
    const [image, setImageFile] = useState(null);

    const handleChange = (e) => {
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("ethnic_group_name", posts.ethnic_group_name);
        formData.append("region_in_Uganda", posts.region_in_Uganda);
        formData.append("number_of_ethnicities", posts.number_of_ethnicities);
        formData.append("number_of_kingdoms", posts.number_of_kingdoms);
        formData.append("ethnicity_name", posts.ethnicity_name);
        formData.append("notes", posts.notes,);
     
        formData.append("contributor_name", posts.contributor_name);
        formData.append("citation", posts.citation);
        
        if (image) {
            formData.append("image", image, image.name);
        }

        axios
            // Use the 'posts' object to send data
          .post("http://127.0.0.1:8000/api/cultures/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },

      
        }) 
        
          //.then((res) => console.log(res))
          .then((res) => {
            // Display success message and clear form
            setSuccessMessage("Culture created successfully!");
            
            // Clear the form inputs
            setPosts({
                ethnic_group_name: "",
                region_in_Uganda:"",
                number_of_ethnicities:"",
                number_of_languages: "",
                number_of_kingdoms:"",
                ethnicity_name:"",         
                notes: "", 
                contributor_name: "",
                citation: "",
                
            });
            setImageFile(null);
    
            // Navigate back to the previous page
            //navigate(-1);
        })
          
          .catch((err) => console.log(err));
        
            
          
    };



  return (
    <Layout>
        
        {/* <Title order={3} ta="center"> CULTURE</Title> */}
        <Container className='container' id="form_title">
            <Title order={3}> ADD NEW CULTURE</Title> 
        </Container> 
        <Container className='container' container-fluid shadow="sm" id="form">
            
            <form onSubmit={handleSubmit}>
                <div> 4. Add Culture Details </div>
                    <div id='sub'>
                        <TextInput
                        label="Ethnic Group Name "
                        value={posts.ethnic_group_name}
                        onChange={handleChange}
                        
                        name="ethnic_group_name"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Region in Uganda where Ethnic Group is Found"
                        value={posts.region_in_Uganda}
                        onChange={handleChange}
                        
                        name='region_in_Uganda'
                        />
                    </div> 
                    <div>
                        <TextInput
                        label="Number of Ethnicities"
                        value={posts.number_of_ethnicities}
                        onChange={handleChange}
                        name='number_of_ethnicities'
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Number of Languages"
                        value={posts.number_of_languages}
                        onChange={handleChange}
                        name='number_of_languages'
                        />
                    </div>
                    {/* <div>
                        <TextInput
                        label="Description"
                        value={posts.description}
                        onChange={handleChange}
                        name='description'
                        />
                    </div> */}

                    <div>
                        <TextInput
                        label="Number of Kingdoms"
                        value={posts.number_of_kingdoms}
                        onChange={handleChange}
                        name='number_of_kingdoms'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Ethnicity Name"
                        value={posts.ethnicity_name}
                        onChange={handleChange}
                        name='ethnicity_name'
                        />
                    </div>
                    
                    
                    <div>
                        {/* Handle Images Here and other File uploads*/}
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
                        <TextInput
                        label="Notes"
                        value={posts.notes}
                        onChange={handleChange}
                        name='notes'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Contributor Name"
                        value={posts.contributor_name}
                        onChange={handleChange}
                        name='contributor_name'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Citation"
                        value={posts.citation}
                        onChange={handleChange}
                        name="citation"
                        />
                    </div>
                    <div>
                        <Button color="lime.6" type='' variant="filled" radius="md"> Submit </Button>
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
        </Container> 

      
    </Layout>
    
  )
  }
  
  //export default Culture
  
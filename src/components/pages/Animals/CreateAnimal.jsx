import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Container, Group, FileInput, Grid, Textarea } from "@mantine/core";
import { Layout } from "../../Layout"
import Popup from '../Plants/Popup';
import './Animal.css'

//function CreateAnimal () {
const CreateAnimal = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
        english_name:"",
        animal_name:"",
        language:"",
        scientific_name:"",
        description: "",
        areas_in_Uganda:"",
        animal_classifications:"",
        kingdom_name:"",
        species:"",
        known_values:"",
        value_details: "",
        unique_habitat:"",
        threats: "",        
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
        formData.append("english_name", posts.english_name);
        formData.append("animal_name", posts.medicinal_plant);
        formData.append("language", posts.language);
        formData.append("scientific_name", posts.scientific_name);
        formData.append("description", posts.description);
        formData.append("areas_in_Uganda", posts.areas_in_Uganda,);
        formData.append("animal_classifications", posts.animal_classifications);
        formData.append("kingdom_name", posts.kingdom_name); 
        formData.append("species", posts.species);
        formData.append("known_values", posts.known_values);
        formData.append("value_details", posts.value_details);
        formData.append("unique_habitat", posts.unique_habitat);
        formData.append("threats", posts.threats);
        formData.append("notes", posts.notes);
        formData.append("contributor_name", posts.contributor_name);
        formData.append("citation", posts.citation);
        
        if (image) {
            formData.append("image", image, image.name);
        }

        axios
            // Use the 'posts' object to send data
          .post("http://127.0.0.1:8000/api/animals/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },

      
        }) 
        
          //.then((res) => console.log(res))
          .then((res) => {
            // Display success message and clear form
            setSuccessMessage("Data submitted successfully!");
            
            // Clear the form inputs
            setPosts({
                english_name: "",
                animal_name:"",
                language:"",
                scientific_name:"",
                description: "",
                areas_in_Uganda:"",
                animal_classifications:"",
                kingdom_name:"",
                species:"",
                known_values:"",
                value_details: "",
                unique_habitat:"",
                threats: "",        
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
    <div>
        <Container className='container' id="form_title">
            <Title order={3}> ADD NEW ANIMAL</Title> 
        </Container>   
        <Container className='container' container-fluid='true' shadow="sm" id="form">

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6" id="col">  
                        <TextInput
                        label="English Name"
                        value={posts.english_name}
                        onChange={handleChange}
                        description="Enter Name of Animal"
                        name="english_name"
                        /> 
                    </div>
                    <div className="col-md-6" id="col"> 
                        <TextInput
                        label="Name"
                        value={posts.animal_name}
                        onChange={handleChange}
                        description="Name in one of Uganda's Native Languages"
                        name='animal_name'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Language"
                        value={posts.language}
                        onChange={handleChange}
                        name='language'
                        
                        />
                    </div>   
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Scientific Name"
                        value={posts.scientific_name}
                        onChange={handleChange}
                        name='scientific_name'
                        />
                    </div>
                </div>
                <div className="row">                         
                    <Textarea
                        label="Description"
                        value={posts.description}
                        onChange={handleChange}
                        name="description"
                        autosize
                        minRows={4}
                        maxRows={6}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Areas in Uganda"
                        value={posts.areas_in_Uganda}
                        onChange={handleChange}
                        name='areas_in_Uganda'
                        />
                    </div>
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Animal Classifications"
                        value={posts.animal_classifications}
                        onChange={handleChange}
                        name='animal_classifications'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Kingdom"
                        value={posts.kingdom_name}
                        onChange={handleChange}
                        name='kingdom_name'
                        />
                    </div>
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Species"
                        value={posts.species}
                        onChange={handleChange}
                        name='species'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Known Values"
                        value={posts.known_values}
                        onChange={handleChange}
                        name='known_values'
                        />
                    </div>
                    <div className="col-md-6" id="col">
                            <TextInput
                            label="Value Details"
                            value={posts.value_details}
                            onChange={handleChange}
                            name='value_details'
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                        label="Unique Habitat"
                        value={posts.unique_habitat}
                        onChange={handleChange}
                        name='unique_habitat'
                        />
                    </div>
                    <div className="col-md-6" id="col">
                            <TextInput
                            label="Threats"
                            value={posts.threats}
                            onChange={handleChange}
                            name='threats'
                            />
                    </div>
                </div>
                        
                {/* Handle Images Here and other File uploads*/}

                <div>
                    <FileInput
                        label="Image"
                        files={image ? [image] : []}
                        onChange={handleImageChange}
                    />
                    {image && <Text>{image.name}</Text>}

                </div>
                <div>
                    <Textarea
                        label="Notes"
                        value={posts.notes}
                        onChange={handleChange}
                        name="notes"
                        autosize
                        minRows={4}
                        maxRows={6}
                    />
                </div>
                <div>
                    <Textarea
                        label="Citation"
                        value={posts.citation}
                        onChange={handleChange}
                        name="citation"
                        autosize
                        minRows={2}
                        maxRows={4}
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
      
   </div>
    
  )
  }
  
  export default CreateAnimal
  
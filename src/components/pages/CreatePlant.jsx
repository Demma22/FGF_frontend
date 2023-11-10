import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Button, TextInput, Text, Title, Box, Grid, Select, FileInput, Textarea } from "@mantine/core";
import "./Plant.css"
import { Layout } from "../Layout"

export default function CreatePlant () {  
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
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
    });

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

    //const url = 'https://fgf-app.onrender.com/api/plants/';
    const url = 'http://localhost:8000/api/plants/';

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("botanical_name", posts.botanical_name);
        formData.append("medicinal_plant", posts.medicinal_plant);
        formData.append("names", posts.names);
        formData.append("language", posts.language);
        formData.append("description", posts.description);
        formData.append("region_in_Uganda", posts.region_in_Uganda,);
        formData.append("habitat", posts.habitat);
        formData.append("life_form", posts.life_form); 
        formData.append("health_issues", posts.health_issues);
        formData.append("part_used", posts.part_used);
        formData.append("preparation_steps", posts.preparation_steps);
        formData.append("dosage", posts.dosage);
        formData.append("contraindications", posts.contraindications);
        formData.append("shelf_life", posts.shelf_life);
        formData.append("social_value", posts.social_value);
        formData.append("economical_value", posts.economical_value);
        formData.append("cultural_value", posts.cultural_value);
        formData.append("other_value", posts.other_value);
        formData.append("notes", posts.notes);
        formData.append("contributor_name", posts.contributor_name);
        formData.append("citation", posts.citation);
        
        if (image) {
            formData.append("image", image, image.name);
        }

        axios
            // Use the 'posts' object to send data
          .post("http://localhost:8000/api/plants/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }) 
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      
    };

    const lifeFormOptions = [
        { value: "forest", label: "Forest" },
        { value: "meadow", label: "Meadow" },
        { value: "climber", label: "Climber" },
        { value: "grassland", label: "Grassland" },
        { value: "herb", label: "Herb" },
        { value: "shrub", label: "Shrub" },
        { value: "tree", label: "Tree" },
      ];


  return (
    <Layout>        
        <Container className='container' id="form_title">
            <Title order={3}> ADD NEW PLANT</Title> 
        </Container>   
        <Container className='container' container-fluid='true' shadow="sm" id="form">
              
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6" id="col">        
                        <TextInput
                            label="Botanical Name"
                            value={posts.botanical_name}
                            onChange={handleChange}
                            // description="Enter Name of Plant"
                        
                            name="botanical_name"
                        
                        />
                    </div>
                    
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Medicinal Plant"
                            value={posts.medicinal_plant}
                            onChange={handleChange}
                            name="medicinal_plant"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6" id="col">
                            <TextInput
                            label="Names"
                            value={posts.names}
                            onChange={handleChange}
                            //description="Names by which the plant is known"
                            name="names"
                            />
                        </div>

                   
                    <div className="col-md-6" id="col">   
                        <TextInput
                        label="Language"
                        value={posts.language}
                        onChange={handleChange}
                        name="language"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Habitat"
                            value={posts.habitat}
                            onChange={handleChange}
                            name="habitat"
                            />
                    </div>

                    
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Areas in Uganda"
                            value={posts.region_in_Uganda}
                            onChange={handleChange}
                            name="region_in_Uganda"
                            />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" id="col">
                        <Textarea
                            label="Description"
                            value={posts.description}
                            onChange={handleChange}
                            // error="*"
                            name="description"
                            minRows={4}
                            maxRows={6}
                        />
                    </div>                     
                </div>  
                <div className="row">
                    <div className="col-md-12" id="col">
                        <Select
                            label="Life Form"
                            value={posts.life_form}
                            onChange={(value) => handleChange({ target: { name: "life_form", value } })}
                            data={lifeFormOptions}
                        />
                    </div>
                </div>   
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Health Issues"
                            value={posts.health_issues}
                            onChange={handleChange}
                            name="health_issues"
                            />
                    </div>
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Part Used"
                            value={posts.part_used}
                            onChange={handleChange}
                            name="part_used"
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Preparation Steps"
                            value={posts.preparation_steps}
                            onChange={handleChange}
                            name="preparation_steps"
                            />
                    </div>
                    
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Dosage"
                            value={posts.dosage}
                            onChange={handleChange}
                            name="dosage"
                            />
                    </div>
                </div>
                    
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Contra Indications"
                            value={posts.contraindications}
                            onChange={handleChange}
                            name="contraindications"
                            />
                    </div>
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Shelf Life"
                            value={posts.shelf_life}
                            onChange={handleChange}
                            name="shelf_life"
                            
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Social Value"
                            value={posts.social_value}
                            onChange={handleChange}
                            name="social_value"
                            />
                    
                    </div>
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Economic Value"
                            value={posts.economical_value}
                            onChange={handleChange}
                            name="economical_value"
                        />
                    </div>
                </div>

                <div>
                        <TextInput
                            label="Cultural Value"
                            value={posts.cultural_value}
                            onChange={handleChange}
                            name="cultural_value"
                            />
                    </div>
                    <div>
                        <TextInput
                            label="Other Value"
                            value={posts.other_value}
                            onChange={handleChange}
                            name="other_value"
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
                        name="contributor_name"
                        />
                    </div>
                 
                    <div>
                        <Button color="lime.6" type='' variant="filled" radius="md"> Submit </Button>
                    </div>
                </form>
            </Container>    
      
    </Layout>
    
  )
  }


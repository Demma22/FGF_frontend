import { useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Container, Button, TextInput, Text, Title, Box, Grid, Select, FileInput, Textarea, Checkbox } from "@mantine/core";
import "./Plant.css"


const CreatePlant = () => {  
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
        botanical_name:" ",
        description: "",
        region_in_Uganda:"",
        habitat:"",
        life_form:"",
        social_value: "",
        economical_value:"",
        cultural_value: "",
        other_value: "",
        notes: "", 
        contributor_name: "",
        citation: "",
        is_medicinal:"",
        
    });
    // plantname endpoint
    const [posts1, setPosts1] = useState({
        name:"",
        local_language:"",
   
    });
    // medicinal plant endpoint
    const [posts2, setPosts2] = useState({
        plant:"",
        health_issues: "",
        part_used: "",
        preparation_steps: "",
        dosage:"",
        contraindications:"", 
        shelf_life: "",
    });

    const [image, setImageFile] = useState(null);

    // const { register, handleSubmit, errors } = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPosts((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setPosts1((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setPosts2((prev) => {
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
    const url1 = 'http://localhost:8000/api/plant-names/';
    const url2 = 'http://localhost:8000/api/medicinal-plants/';

    const handleSubmitMedPlant = (e) => {
        e.preventDefault();
      
        const postData2 = {
        plant: posts2.plant,
        health_issues: posts2.health_issues,
        part_used: posts2.part_used,
        preparation_steps: posts2.preparation_steps,
        dosage: posts2.dosage,
        contraindications: posts2.contraindications,
        shelf_life: posts2.shelf_life,
        
        };
        

        axios
            // Use the 'posts' object to send data
          .post(url2, postData2, {
            headers: {
                "Content-Type": "application/json",
            },
        }) 
        .then((res) => {
            console.log(res);
            alert('Form submitted successfully!');
        }).catch((err) => console.log(err));
      
    };

    const handleSubmitPlantName = (e) => {
        e.preventDefault();
      
        const formData1 = {
            name: posts1.name,
            local_language: posts1.local_language,
        }

        axios
            // Use the 'posts' object to send data
          .post(url1, formData1, {
            headers: {
                "Content-Type": "application/json",
            },
        }) 
        .then((res) => {
            console.log(res);
            alert('Form submitted successfully!');
        }).catch((err) => console.log(err));
      
    };

    const onSubmit = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("botanical_name", posts.botanical_name);
        formData.append("region_in_Uganda", posts.region_in_Uganda,);
        formData.append("habitat", posts.habitat);
        formData.append("life_form", posts.life_form); 
        formData.append("description", posts.description);
        formData.append("is_medicinal", posts.is_medicinal);
        
        formData.append("cultural_value", posts.cultural_value);
        formData.append("social_value", posts.social_value);
        formData.append("economical_value", posts.economical_value);
        formData.append("other_value", posts.other_value);
        formData.append("notes", posts.notes);
        formData.append("contributor_name", posts.contributor_name);
        formData.append("citation", posts.citation);

    
        if (image) {
            formData.append("image", image, image.name);
        }

        axios
            // Use the 'posts' object to send data
          .post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }) 
        .then((res) => {
            console.log(res);
            alert('Form submitted successfully!');
        }).catch((err) => console.log(err));
      
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
    <>
       
        <Container className='container' id="form_title">
            <Title order={3}> ADD NEW PLANT</Title> 
        </Container>   
        <Container className='container' container-fluid='true' shadow="sm" id="form">
            <form onSubmit={handleSubmitMedPlant}>
                <p>Plant Names</p>
                <div className="row">  
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Names"
                            value={posts1.name}
                            onChange={handleChange1}
                            //description="Names by which the plant is known"
                            name="name"
                            />
                    </div>
                    <div className="col-md-6" id="col">   
                        <TextInput
                        label="Language"
                        value={posts1.local_language}
                        onChange={handleChange1}
                        name="local_language"
                        />
                    </div>
                </div> 

            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>General Information</p>
                <div className="row">
                    <div className="col-md-12" id="col">        
                        <TextInput
                            label="Botanical Name"
                            value={posts.botanical_name}
                            {...register('botanical_name', { required: true })}
                            onChange={handleChange}
                            // description="Enter Name of Plant"    
                            name="botanical_name"
                        />
                        {errors.botanical_name && <span>This field is required</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" id="col">
                        <Checkbox
                            label="Medicinal?"
                            value={posts.is_medicinal}
                            onChange={handleChange1}
                            name="is_medicinal"
                        />
                    </div>  
                </div>

                <div className="row">
                    <div className="col-md-12" id="col">
                        <TextInput
                            label="Areas in Uganda"
                            value={posts.region_in_Uganda}
                            onChange={handleChange}
                            name="region_in_Uganda"
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
                        <Select
                            label="Life Form"
                            value={posts.life_form}
                            onChange={(value) => handleChange({ target: { name: "life_form", value } })}
                            data={lifeFormOptions}
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
                </form>

            <form onSubmit={handleSubmitMedPlant}>
                <p>Medicinal Plant Details</p>
                <div className="row">
                    <div className="col-md-12" id="col">
                        <TextInput
                            label="Plant Name"
                            value={posts2.plant}
                            onChange={handleChange2}
                            name="plant"
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Health Issues"
                            value={posts2.health_issues}
                            onChange={handleChange2}
                            name="health_issues"
                            />
                    </div>
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Part Used"
                            value={posts2.part_used}
                            onChange={handleChange2}
                            name="part_used"
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Preparation Steps"
                            value={posts2.preparation_steps}
                            onChange={handleChange2}
                            name="preparation_steps"
                            />
                    </div>
                    
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Dosage"
                            value={posts2.dosage}
                            onChange={handleChange2}
                            name="dosage"
                            />
                    </div>
                </div>
                    
                <div className="row">
                    <div className="col-md-6" id="col">
                        <TextInput
                            label="Contra Indications"
                            value={posts2.contraindications}
                            onChange={handleChange2}
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
                              
                <div>
                    <Button color="lime.6" type='' variant="filled" radius="md"> Submit </Button>
                </div>
                </form>
            </Container>    
      

    </>
  )
  }

export default CreatePlant


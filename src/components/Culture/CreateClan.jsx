import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Group, FileInput, Grid } from "@mantine/core";
// import { Layout } from "../Layout"

import './Culture.css'

export default function CreateClan () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
        clan_name: "",
        clan_seat:"",
        totem:"",
        secondary_totem:"",
        clan_history:"",
        clan_leader_title:"",
        clan_leader_name: "",
        cultural_sites:"",
        male_names:"",
        female_names:"",
        taboos:"", 
        lead_god: "",
        other_gods:"",

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
      
        const formData = new FormData();
        formData.append("clan_name", posts.clan_name);
        formData.append("clan_seat", posts.clan_seat);
        formData.append("totem", posts.totem);
        formData.append("secondary_totem", posts.secondary_totem);
        formData.append("clan_history", posts.clan_history);
        formData.append("clan_leader_title", posts.clan_leader_title);
        formData.append("clan_leader_name", posts.clan_leader_name);
        formData.append("cultural_sites", posts.cultural_sites);
        formData.append("male_names", posts.male_names,);
        formData.append("female_names", posts.female_names);
        formData.append("taboos", posts.taboos); 
        formData.append("lead_god", posts.lead_god);
        formData.append("other_gods", posts.other_gods);

        axios
            // Use the 'posts' object to send data
          .post("http://127.0.0.1:8000/api/cultures/clans/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }) 

          .then((res) => {
            // Display success message and clear form
            setSuccessMessage("Clan created successfully!");
            
            // Clear the form inputs
            setPosts({
                clan_name: "",
                clan_seat:"",
                totem:"",
                secondary_totem:"",
                clan_history:"",
                clan_leader_title:"",
                clan_leader_name: "",
                cultural_sites:"",
                male_names:"",
                female_names:"",
                taboos:"", 
                lead_god: "",
                other_gods: "",
                
            });
    
            // Navigate createKingdom component
            navigate("/CreateKingdom");
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
                        label="Clan Name"
                        value={posts.clan_name}
                        onChange={handleChange}
                        description="Enter Clan Name"
                        name="clan_name"
                        />
                    </div>
        
                    <div>
                        <TextInput
                        label="Clan Seat"
                        value={posts.clan_seat}
                        onChange={handleChange}
                        
                        name='clan_seat'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Totem"
                        value={posts.totem}
                        onChange={handleChange}
                        name='totem'
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Secondary Totem"
                        value={posts.secondary_totem}
                        onChange={handleChange}
                        name='secondary_totem'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Clan History"
                        value={posts.clan_history}
                        onChange={handleChange}
                        name='clan_history'
                        />
                    </div>

                    <div>
                        <TextInput
                        label="Title of Clan Leader"
                        value={posts.clan_leader_title}
                        onChange={handleChange}
                        name='clan_leader_title'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Name of Clan Leader"
                        value={posts.clan_leader_name}
                        onChange={handleChange}
                        name='clan_leader_name'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Cultural Sites"
                        value={posts.cultural_sites}
                        onChange={handleChange}
                        name='cultural_sites'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Common Male Names"
                        value={posts.male_names}
                        onChange={handleChange}
                        name='male_names'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Common Female Names"
                        value={posts.female_names}
                        onChange={handleChange}
                        name='female_names'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Taboos"
                        value={posts.taboos}
                        onChange={handleChange}
                        name='taboos'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Lead God"
                        value={posts.lead_god}
                        onChange={handleChange}
                        name='lead_god'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Other Gods"
                        value={posts.other_gods}
                        onChange={handleChange}
                        name='other_gods'
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
  
  //export default Clan
  
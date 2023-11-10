import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Title, Container, Group, FileInput, Grid } from "@mantine/core";
import { Layout } from "../../Layout"

import './Culture.css'

export default function CreateKingdom () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
        kingdom_name: "",
        title_of_leader:"",
        current_king:"",
        current_chief_name:"",
        number_of_clans:"",
        clan_name: "",

    });
    const [clans, setClans] = useState([]);
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

    const url = 'http://127.0.0.1:8000/api/cultures/clans/';
   
    useEffect(() => {
        axios.get(url)  
          .then((response) => {
            setPosts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("kingdom_name", posts.kingdom_name);
        formData.append("title_of_leader", posts.title_of_leader);
        formData.append("current_king", posts.current_king);
        formData.append("current_chief_name", posts.current_chief_name);
        formData.append("number_of_clans", posts.number_of_clans);
        
        axios
            // Use the 'posts' object to send data
          .post("http://127.0.0.1:8000/api/cultures/cultural_kingdom/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }) 

          .then((res) => {
            // Display success message and clear form
            setSuccessMessage("Kingdom created successfully!");
            
            // Clear the form inputs
            setPosts({
                kingdom_name: "",
                title_of_leader:"",
                current_king:"",
                current_chief_name:"",
                number_of_clans:"",
                clan_name: "",
                
            });
    
            // Navigate createKingdom component
            navigate("/CreateEthnicity");
        })
          
          .catch((error) => console.log(error));
          
    };



  return (
    <Layout>
        <Container className='container' id="form_title">
            <Title order={3}> ADD NEW CULTURE</Title> 
        </Container> 
        <Container className='container' container-fluid='true' shadow="sm" id="form">
         
                <form onSubmit={handleSubmit}>
                <div id="sub_tile_no_spc" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="font-bold w-8 h-8 rounded-full overflow-hidden bg-[#C1BCCD] text-[#fff] flex justify-center items-center">
                        2.
                    </div>
                    <span style={{ whiteSpace: 'nowrap' }}> Add Kingdom Details </span> 
                </div>
                    <div>
                        <TextInput
                        label="Kingdom Name"
                        value={posts.kingdom_name}
                        onChange={handleChange}
                        
                        name="kingdom_name"
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Title of Leader"
                        value={posts.title_of_leader}
                        onChange={handleChange}
                        
                        name='title_of_leader'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Current King"
                        value={posts.current_king}
                        onChange={handleChange}
                        name='current_king'
                        
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Current Chief Name"
                        value={posts.current_chief_name}
                        onChange={handleChange}
                        name='current_chief_name'
                        />
                    </div>
                    <div>
                        <TextInput
                        label="Number of Clans"
                        value={posts.number_of_clans}
                        onChange={handleChange}
                        name='number_of_clans'
                        />
                    </div>

                    <div>
                        <TextInput
                        label="Clan Name"
                        value={posts.clan_name}
                        onChange={handleChange}
                        name='clan_name'
                        />
                    </div>

                    {clans.map((clan) => (
                        <Card key={clans.id}>
                        <Text>{clans.clan_name}</Text>
                        </Card>
                    ))}               
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

            </Container>
      
    </Layout>
    
  )
  }
  
  //export default Kingdom
  
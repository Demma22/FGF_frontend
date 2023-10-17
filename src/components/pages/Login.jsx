import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Group, Box } from "@mantine/core";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  // const users = [{ username: "Fgf", password: "testpassword" }];
  // const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  /* const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  
    fetch("https://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pswd,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }; */ 
    const handleSubmit = async (event) => {
      event.preventDefault();
      // If the POST request is successful, clear the form inputs
      setEmail('');
      setPswd('');

      /* const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
      }
      // Create a data object with the form values
      const login = {
        email: email,
        password: pswd,
      }; */
  
      try {
        const response = await axios.post('https://localhost:8000/login', {
          email: email,
          password: pswd,
        });
  
        if (response.data.username === "fgf@user.com") {
          navigate("/Layout")
        }else if (response.data.role === "is_contributor"){
          navigate("/Layout")
        }
  
        
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

  
  return (
    <Box maw={540} mx="auto">
      <div className="auth-form-container">
        <h2> Login </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            //id="email"
            //name="email"
            required
          />
          <Text>Password</Text>
          <TextInput
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            type="password"
            placeholder="*********"
            //id="password"
            //name="password"
            required
          />
          <Group justify="flex-end" mt="md">
            <Button 
              type="" 
              color="green.6" 
              c="black"
              
            >
              Log In
            </Button>
            {/* <Link to="/Layout"></Link> */}
          </Group>
          
        </form>
          <Group justify="flex-end" mt="md">
            Don't have an account? 
            
              <Link to={"/Register"}>Register here.</Link>
            
          </Group>
      </div>
    </Box>
  );
};

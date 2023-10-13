import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextInput, Text, Group, Box } from "@mantine/core";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleSubmit = (e) => {
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
            id="email"
            name="email"
          />
          <Text>Password</Text>
          <TextInput
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
          <Group justify="flex-end" mt="md">
            <Link to="/SideBar">
              <Button type="submit" color="green.6" c="black">Log In</Button>
            </Link>
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

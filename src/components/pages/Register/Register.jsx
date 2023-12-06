import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Button, Paper, Col, Container, Text, Checkbox } from '@mantine/core';
import "./register.css"


export default function Register () { 
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    email: "",
    username:"",
    password:"",
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
        email: posts.email,
        username: posts.username,
        password: posts.password,
    };
    
    axios
        // Use the 'posts' object to send data
      .post("http://localhost:8000/api/register/", postData, {
        headers: {
            "Content-Type": "application/json", 
        },
    }) 
      .then((res) => {
        // Display success message and clear form
        setSuccessMessage("Registered successfully!");
        alert('Registered successfully!');
        // Clear the form inputs
        setPosts({
          email: "",
          username: "",
          password: "",
        });
        navigate("/login");
    })
      .catch((err) => console.log(err));          
  };
  
  return (
    // <Container className="container-fluid container">
      <div className="flex h-screen items-center justify-center square-block ">
        <div className="main-container">
          <div className="login-side-list ">
            <div className="line-breaks">
              <h1>Help us Grow</h1>
              <h1>
                <br /> <br /> Indulge <br /> in <br /> Ugandan <br /> Diversity
              </h1>
            </div>
          </div>
          <div>
            <div className="auth-form-Container register">
              <h2>
                Register{" "}
                <span>
                  <img className="login-logo-register" src="imgs/login/fgfoundation_logo.png" alt="" />
                </span>
              </h2>
              <div>
                <button>
                  <img className="register" src="imgs/regimages/icons-google.png" alt="google-logo" />
                  Signup with Google
                </button>
                <br />
                <button>
                  <img className="register" src="imgs/regimages/facebook-logo.png" alt="facebook-logo" />
                  Signup with Facebook
                </button>
              </div>
              <form className="register-form" onSubmit={handleSubmit}>
                <p>Signup with Email</p>
                <div>
                  <TextInput
                    label="Username"
                    value={posts.username}
                    onChange={handleChange}
                    placeholder="Enter Your Username" 
                    name="username"
                    required
                    />
                </div>
                <div>
                  <TextInput
                    label="Email Address"
                    value={posts.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address" 
                    name="email"
                    required
                    />
                </div>
                <div>
                  <TextInput
                    label="Password"
                    value={posts.password}
                    onChange={handleChange} 
                    type="password"
                    placeholder="Password"  
                    name="password"
                    required
                    />
                </div>
                <button type="submit" className="rounded">Register</button>
              </form>

              <Text
                    className="success-message"
                    size="sm"
                    color="green"
                    style={{ marginTop: '10px' }}
                >
                    {successMessage}
                </Text> 

                  Already have an account? 
                  <Link to="/login" className="undereg-links">Login</Link>
            </div>
          </div>
        </div>
      </div>


    // </Container>
    
  );
};

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Group, Box } from "@mantine/core";
import "./Login.css"


export const Login = (props) => {
  const [posts, setPosts] = useState({
    username: "",
    password: "",
  });
  
  // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  // const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //initialise success message state
  // const [successMessage, setSuccessMessage] = useState(null);
  
  const [token, setToken] = useState(''); // Store the authentication token
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts((prevPosts) => ({
      ...prevPosts,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      username: posts.username,
      password: posts.password,
    };

    try {
      const response = await axios.post('https://fgfbackend.onrender.com/api/login/', postData, {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        //Console: console.log(headers)
        // body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        // Successful login
        setSuccessMessage('Logged in successfully!');
        setErrorMessage(''); // Clear any previous error message'

        const isAuthenticated = true;

        // Successful login
        const authToken = response.data.token;

        // Store the authentication token in localStorage
        localStorage.setItem('authToken', authToken);
        
        // setToken(response.data.token);
        setToken(authToken);

        // Delay the navigation to another page for 2 seconds (2000 milliseconds)
        setTimeout(() => {
          // history.push('/another-page'); // Replace '/another-page' with the desired route
          if (isAuthenticated) {
            //history.pushState('/CreatePlant')
            navigate('/CreatePlant');
          }
        }, 2000);
        
      } else {
        // Handle other response status codes if needed
        setErrorMessage('Login failed. Please check your credentials.');
        setSuccessMessage('');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Login error:', error);
      setErrorMessage('Login failed. Please try again.');
      setSuccessMessage('');
    }
  };
  /* const handleSubmit = (e) => {
    e.preventDefault();
  
    const postData = {
        email: posts.email,
        username: posts.username,
        password: posts.password,
    };
    
    axios
        // Use the 'posts' object to send data
      .post("https://fgfbackend.onrender.com/api/login/", postData, {
        headers: {
            "Content-Type": "application/json", 
        },
    }) 
      .then((res) => {
        // Display success message and clear form
        setSuccessMessage("Logged in successfully!");
        
        // Clear the form inputs
        setPosts({
          // email: "",
          username: "",
          password: "",
        });

    })
      .catch((err) => console.log(err));          
  }; */
  
  
    return (
      <div className="square-block">
        <div className="main-container">
          <div  className="login-side-list">
            <div className="line-breaks">
              <h1><br/> <br/>Indulge <br/>in <br/> Ugandan <br/> Diversity</h1>
            </div>
          </div>
          <div className="auth-form-container login">
            <h2> Hello Again </h2>
            <h1> Login with </h1>
            <button><img className="login-logo" src="imgs/login/google_logo.png" alt="" /></button>
            <button><img className="login-logo" src="imgs/login/Facebook-Logo-2019.png" alt="facebookLogo" /></button>
            <form className="login-form" onSubmit={handleSubmit}>


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
                label="Password"
                value={posts.password}
                onChange={handleChange}
                placeholder="Enter Your Password" 
                name="password"
                type="password"
                required
                />
            </div>
              <button type="submit" className="login-button rounded">
                Log In 
              </button>
            <div>
              <a className="log" href="#">Remember me</a><a href="#">Forgot password?</a>
            </div>
            </form>
            <Link to={"/Register"} className="underlog-links">
              Register/SignUp
            </Link>  

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {/* <Text
                    className="success-message"
                    size="sm"
                    color="green"
                    style={{ marginTop: '10px' }}
                >
                    {successMessage}
              </Text> */} 

            <img className="login-logo llogin" src="imgs/login/fgfoundation_logo.png" alt="" />
            
          </div>
        </div>
      </div>
      
    );
}

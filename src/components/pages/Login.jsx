import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput, Text, Group, Box } from "@mantine/core";

export const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  // const users = [{ username: "Fgf", password: "testpassword" }];
  // const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
  // Clear the form inputs
  //setEmail('');
  //setPswd('');

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
        const response = await axios.post('http://localhost:8000/login/', {
          email: formData.email,
          password: formData.password,
        });

        if (response.data.email === email) {
          navigate("/Layout")
        }else if (response.data.email === "is_contributor"){
          navigate("/Layout")
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
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
              
            <TextInput
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Username/Email"
                label="Email"
              />
              <TextInput
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
              />
              <button type="submit" className="login-button">Log In </button>
              <div>
                <a className="log" href="#">Remember me</a><a href="#">forgot password?</a>
              </div>
            </form>
            <Link to={"/Register"}>
              <button
                // className="link-btn"
                // onClick={() => props.onFormSwitch('Login')}
              className="underlog-links">
                Register/SignUp
              </button>
              <img className="login-logo llogin" src="imgs/login/fgfoundation_logo.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      
    );
}

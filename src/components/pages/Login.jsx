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

    }
    return (
      <div className="auth-form-container login">
        <h2> Hello Again </h2>
        <h1> Login with </h1>
        <button><img className="login" src="imgs/login/google_logo.png" alt="" /></button>
        <button><img className="login" src="imgs/login/Facebook-Logo-2019.png" alt="facebookLogo" /></button>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlfor="email"></label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Username/Email"
            id="email"
            name="email"
          />
          <label htmlfor="password">  </label>
          <input
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button type="submit"> Log In </button>
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
      
    );
}

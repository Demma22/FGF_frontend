import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Button, Paper, Col, Container, Text, Checkbox } from '@mantine/core';

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswd2, setPswd2] = useState("");
  const [name, setName] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);

    try {
      const response = await axios.post('http://localhost:8000/register/', {
        email: email,
        username: username,
        password1: pswd,
        password2: pswd2,
        name: name,

      });

      if (response.ok) {
        console.log('Successfully register!');
        navigate("/Layout")
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  }


  return (
    <div className="square-block">
      <div className="main-container">
        <div className="login-side-list">
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
                <img className="login-logo" src="imgs/login/fgfoundation_logo.png" alt="" />
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
              <label htmlfor="name"></label>
              <input value={name} name="name" id="name" placeholder="Name" />
              <label htmlfor="name"></label>
              
              <input 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              name="username" 
              //id="name" 
              placeholder=" Username" 
              />
              
              <label htnmlfor="email"></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=" Email"
                //id="email"
                //name="email"
                required
              />
              <label htmlFor="password"></label>
              <input
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
                type="password"
                placeholder="Password"
                //id="password"
                //name="password"
                required
              />
              <label htmlFor="password"></label>
              <input
                value={pswd2}
                onChange={(e) => setPswd2(e.target.value)}
                value={pswd2}
                onChange={(e) => setPswd2(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                //id="password"
                //name="password"
              />
              <button type="submit">Register</button>
            </form>
            <Link to="/login">
              <button className="link-btn">
                Already have an account? <a className="undereg-links" href="">Login</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

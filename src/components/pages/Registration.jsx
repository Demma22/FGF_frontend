import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password matching


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match
      console.log(email, firstName, lastName, password, confirmPassword);
      setPasswordsMatch(true);
      // Continue with registration logic
    } else {
      // Passwords don't match
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="square-block">
      <div className="main-container">
        <div  className="login-side-list">
          <div className="line-breaks">
            <h1>Help us Grow</h1>
            <h4 id="reg-side">Build Ugandas no.1<br/>Biodiversity and Heritage<br/>encyclopedia</h4>
            <h4 id="reg-side">Build Ugandas no.1<br/>Biodiversity and Heritage<br/>encyclopedia</h4>
            <h4 id="reg-side">Build Ugandas no.1<br/>Biodiversity and Heritage<br/>encyclopedia</h4>
          </div>
        </div>
        <div>
          <div className="auth-form-Container register">
            <h2> Register <span><img className="login-logo" src="imgs/login/fgfoundation_logo.png" alt="" /></span></h2>
            <div>
              <button><img className="register" src="imgs/regimages/icons-google.png" alt="google-logo" />Signup with Google</button><br />
              <button><img className="register" src="imgs/regimages/facebook-logo.png" alt="facebook-logo" />Signup with facebook</button>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
              <p>Signup with Email</p>
              <label htmlFor="firstName"></label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
              />
              <label htmlFor="lastName"></label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
              />
              <label htnmlfor="email"></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=" Email"
                id="email"
                name="email"
              />
              <label htmlFor="password"></label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              <label htmlFor="confirmPassword"></label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
              />
              {passwordsMatch ? null : (
                <p className="error-message">Passwords do not match</p>
              )}
              <button type="submit">Register </button>
            </form>
            <Link to={"/login"}>
              <button
                className="link-btn"
              // onClick={() => props.onFormSwitch('Register')}
              >
                Already have an account? <a className="undereg-links" href="">Login</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div> 
  );
};  

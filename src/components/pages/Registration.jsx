import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (

    <div className="auth-form-Container register">
      <h2> Register <span><img className="login-logo" src="imgs/login/fgfoundation_logo.png" alt="" /></span></h2>
      <div>
        <button><img className="register" src="imgs/regimages/icons-google.png" alt="google-logo" />Signup with Google</button><br />
        <button><img className="register" src="imgs/regimages/facebook-logo.png" alt="facebook-logo" />Signup with facebook</button>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <p>Signup with Email</p>
        <label htmlfor="name"></label>
        <input value={name} name="name" id="name" placeholder="First Name"  />
        <label htmlfor="name"></label>
        <input value={name} name="name" id="name" placeholder=" Last Name" />
        <label htnmlfor="email"></label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder=" Email"
          id="email"
          name="email"
        />
        <label htmlfor="password"></label>
        <input
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <label htmlfor="password"></label>
        <input
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          id="password"
          name="password"
        />
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
  );
};

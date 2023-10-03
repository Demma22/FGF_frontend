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
    <div className="auth-form-Container">
      <h2> Register </h2>
      <form className=" register-form" onSubmit={handleSubmit}>
        <label htmlfor="name"> Full name</label>
        <input value={name} name="name" id="name" placeholder="full name" />
        <label htnmlfor="email"> Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlfor="password"> Password</label>
        <input
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type="submit"> Register </button>
      </form>
      <Link to={"/login"}>
        <button
          className="link-btn"
          // onClick={() => props.onFormSwitch('Register')}
        >
          Already have an account? Login here.
        </button>
      </Link>
    </div>
  );
};

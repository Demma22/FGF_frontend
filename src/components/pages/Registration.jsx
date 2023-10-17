import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswd2, setPswd2] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    fetch("https://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: pswd,
        password2: pswd2,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
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

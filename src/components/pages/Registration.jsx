import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswd2, setPswd2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (pswd !== pswd2) {
      console.error("Passwords do not match");
      return;
    }

    fetch("https://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        pswd: pswd, // Using "pswd" field name
        pswd2: pswd2, // Using "pswd2" field name
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

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
              <label htmlFor="firstName"></label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <label htmlFor="lastName"></label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
              <label htmlFor="email"></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <label htmlFor="password"></label>
              <input
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label htmlFor="password"></label>
              <input
                value={pswd2}
                onChange={(e) => setPswd2(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Confirm Password"
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

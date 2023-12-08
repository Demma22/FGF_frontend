import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Text } from "@mantine/core";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function AdministratorRegistration() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      email: posts.email,
      username: posts.username,
      password: posts.password,
    };

    axios
      .post("http://localhost:8000/api/register/", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        setPosts({
          email: "",
          username: "",
          password: "",
        });
        navigate("/login");

        // Display success message using toast
        toast.success("Registration successful!");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);

        // Display error message using toast
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex h-screen items-center justify-center square-block ">
      <div className="main-container">
        {/* <div className="login-side-list ">
          <div className="line-breaks">
            <h1>Help us Grow</h1>
            <h1>
              <br /> <br /> Indulge <br /> in <br /> Ugandan <br /> Diversity
            </h1>
          </div>
        </div> */}
        <div>
          <div className="auth-form-Container register">
            <h2>
              Register{" "}
              <span>
                <img
                  className="login-logo-register"
                  src="imgs/login/fgfoundation_logo.png"
                  alt=""
                />
              </span>
            </h2>
            <div>
              <button>
                <img
                  className="register"
                  src="imgs/regimages/icons-google.png"
                  alt="google-logo"
                />
                Signup with Google
              </button>
              <br />
              <button>
                <img
                  className="register"
                  src="imgs/regimages/facebook-logo.png"
                  alt="facebook-logo"
                />
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
              <button type="submit" className="rounded" disabled={loading}>
                {loading ? (
                  <ClipLoader
                    color="#fff"
                    loading={true}
                    css={override}
                    size={25}
                  />
                ) : (
                  "Register"
                )}
              </button>
            </form>

            Already have an account?
            <Link to="/login" className="undereg-links">
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

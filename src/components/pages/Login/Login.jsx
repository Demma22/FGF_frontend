import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Text } from "@mantine/core";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Login = (props) => {
  const [posts, setPosts] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts((prevPosts) => ({
      ...prevPosts,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      username: posts.username,
      password: posts.password,
    };

    try {
      const response = await axios.post('https://fgfbackend.onrender.com/api/v1/auth/login/', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success('Logged in successfully!');

        const isAuthenticated = true;

        setTimeout(() => {
          if (isAuthenticated) {
            navigate('/ContributorDashboard');
          }
        }, 2000);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center square-block">
      <div className="main-container">
        {/* <div className="login-side-list">
          <div className="line-breaks">
            <h1><br /> <br />Indulge <br />in <br /> Ugandan <br /> Diversity</h1>
          </div>
        </div> */}
        <div className="auth-form-container login">
          <h2> Hello Again </h2>
          <h1> Login with </h1>
          <img className="login-logo1" src="imgs/login/google_logo.png" alt="" />
          <h1> or Enter Login Details </h1>
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
            <button type="submit" className="rounded" disabled={loading}>
              {loading ? (
                <ClipLoader color="#fff" loading={true} css={override} size={25} />
              ) : (
                'LogIn'
              )}
            </button>
            <div>
              <a className="log" href="#">Remember me</a><a href="#">Forgot password?</a>
            </div>
          </form>
          <Link to={"/Register"} className="underlog-links">
            Register/SignUp
          </Link>
          <ToastContainer />
          <img className="login-logo llogin" src="imgs/login/fgfoundation_logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

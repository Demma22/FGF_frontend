import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";
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

const AdminLogin = () => {
  const [posts, setPosts] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      email: posts.email,
      password: posts.password,
    };

    try {
      const response = await axios.post(
        "https://fgfbackend.onrender.com/api/v1/auth/login/admin/",
        postData
      );

      if (response.status === 200) {
        toast.success("Logged in successfully!");

        const isAuthenticated = true;

        setTimeout(() => {
          if (isAuthenticated) {
            navigate("/AdminDashboard");
          }
        }, 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center square-block">
      <div className="main-container">

        <div className="auth-form-container login">
          <h2> ADMIN LOGIN </h2>
         
          {/* <img className="login-logo llogin" src="imgs/login/fgfoundation_logo.png" alt="" /> */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <TextInput
                label="Email"
                value={posts.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                name="email"
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
                "LogIn"
              )}
            </button>
          </form>

          <ToastContainer />
          
        </div>
      </div>
    </div>
  );
};

export default AdminLogin
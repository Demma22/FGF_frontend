import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import "./register.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

// Initialize the modal
Modal.setAppElement("#root");

const VerificationModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Verification Popup"
    >
      <div>
        <h2>Check your Email</h2>
        <p>A verification code has been sent to your email.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default function Register() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);
  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };

  const handleVerificationModalClose = () => {
    setVerificationModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      email: posts.email,
      first_name: posts.first_name,
      last_name: posts.last_name,
      password: posts.password,
      password2: posts.password2,
    };

    axios
      .post("https://fgfbackend.onrender.com/api/v1/auth/register/contributor/", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        setPosts({
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          password2: "",
        });
        navigate("/login");

        // Display success message using toast
        toast.success("Registration successful!");

        // Show verification modal
        handleVerificationModalOpen();
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
        <div className="login-side-list ">
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
              <div className="flex">
              
                <TextInput
                  label="First Name"
                  value={posts.first_name}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  name="first_name"
                  required
                />
              
            
                <TextInput
                  label="Last Name"
                  value={posts.last_name}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  name="last_name"
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
              <div>
                <TextInput
                  label="Repeat Password"
                  value={posts.password2}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  name="password2"
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

      {/* Verification Modal */}
      <VerificationModal
        isOpen={verificationModalOpen}
        onClose={handleVerificationModalClose}
      />

      <ToastContainer />
    </div>
  );
}

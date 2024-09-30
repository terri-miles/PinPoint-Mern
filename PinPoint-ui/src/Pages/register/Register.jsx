import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import upload from "../../utils/upload";
import apiRequest from "../../utils/apiRequest";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    img: "",
  });

  console.log(user);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);

    try {
      await apiRequest.post("/auth/register", {
        ...user,
        img: url,
      });

      navigate("/");
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
    e.target.reset();
  };

  return (
    <div className="register">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Basic Acount Information</h1>
            <div className="input">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            {isSmallScreen && (
              <div className="right">
                <h1>Contact Information</h1>
                <div className="input">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="Phone Number"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div className="file">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="linkss">
                    <span>Login</span>
                  </Link>
                </p>
              </div>
            )}
            <button type="submit">Submit</button>
            <div className="error">{error && error}</div>
          </div>
          {!isSmallScreen && (
            <div className="right">
              <h1>Contact Information</h1>
              <div className="input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  min={0}
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="file">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="linkss">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;

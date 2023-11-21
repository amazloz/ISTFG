import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./LoginPage.css";
import "./LoginValidation";
function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Email sould not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password sould not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
}

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="headertitle">
            <div className="logintitle">Log In</div>
            <div className="underline"></div>
          </div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
          />
          {errors.email && <span> {errors.email} </span>}
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
          />
          {errors.password && <span> {errors.password} </span>}
          <Link to="/ProfilePage" type="submit" className="buttonlogin">
            Log In
          </Link>
          <Link to="/SignupPage" className="buttonsignup">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;

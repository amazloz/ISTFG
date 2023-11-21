import React from "react";
import Navbar from "../Navbar/Navbar";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <form action="">
          <div className="headertitle">
            <div className="logintitle">Sign Up</div>
            <div className="underline"></div>
          </div>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="date" placeholder="mm/dd/yyyy" />
          <Link to="/LoginPage" className="buttonsignup2">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

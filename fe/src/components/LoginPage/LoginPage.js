import React from "react";
import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
      <a href="/" to="home" smooth={true} duration={500} className="loginhome">
        Call App
      </a>
      <div className="container">
        <div className="header">
          <div className="logintitle">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="inputone">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <input type="text" placeholder="First Name" />
              </div>
            )}
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <input type="text" placeholder="Last Name" />
              </div>
            )}
          </div>
          <div className="inputtwo">
            <div className="input">
              <input type="email" placeholder="Email address" />
            </div>
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <input type="date" placeholder="Bith date" />
              </div>
            )}
          </div>
          <div className="inputthree">
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <input type="password" placeholder="Re-enter Password" />
              </div>
            )}
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">Forgot password?</div>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}>
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

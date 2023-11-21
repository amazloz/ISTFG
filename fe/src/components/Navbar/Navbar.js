import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "./BeforeNavbar.css";

import Button from "../Button/Button";

const BeforeNavbar = () => {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 1000 && window.scrollY <= 1890) {
      setFix(true);
    } else {
      if (window.scrollY >= 2800 && window.scrollY <= 3700) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <nav className={fix ? "navbar fixed" : "navbar"}>
      <a href="/" to="home" smooth={true} duration={500} className="title">
        Call App
      </a>
      <ul>
        <li className="btn">
          <a href="LoginPage">
            <Button>Log In</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BeforeNavbar;

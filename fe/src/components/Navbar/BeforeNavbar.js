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
        <li>
          <Link href="/" to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/" to="about" spy={true} smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li>
          <Link to="pricing" spy={true} smooth={true} duration={700}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={800}>
            Contact
          </Link>
        </li>
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

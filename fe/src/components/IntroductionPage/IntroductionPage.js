import React from "react";
import "./IntroductionPage.css";
import Slider from "../Slider/Slider";
import maincombined from "../IMGS/maincombined.png";
import Button from "../Button/Button";
import BeforeNavbar from "../Navbar/BeforeNavbar";

const IntoductionPage = () => {
  return (
    <div>
      <BeforeNavbar />
      <div>
        <div className="one" id="home">
          <div className="containerbox">
            <div className="title">
              <h1>Speak freely with Call App</h1>
              <p>Master your language by talking with real people</p>
              <a href="LoginPage">
                <Button>Try it Free</Button>
              </a>
            </div>
            <div className="call">
              <img src={maincombined} alt="videocall" />
            </div>
          </div>
        </div>
        <div className="two" id="about">
          <div className="intro">
            <h1> What is Call App</h1>
            <p>
              The Language Learning app where you create real communication with
              others by talking about your interest and hobbies
            </p>
          </div>
          <div className="title">
            <button className="nostyle">
              <p>Chat</p>
            </button>
            <button className="nostyle">
              <p>Audio</p>
            </button>
            <button className="nostyle">
              <p>Video</p>
            </button>
          </div>
          <Slider />
        </div>
        <div className="three" id="about"></div>
        <div className="four" id="pricing"></div>
        <div className="five" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <p>
                <h1>Contact me</h1>
              </p>
              <p>Email: orgilod44@gmail.com</p>
              <p>Phone: +976 95082727</p>
              <p>I'm a very busy person. So don't even</p>
              <p>try to contact me!</p>
            </div>
            <form className="contact-form">
              <div className="form-one">
                <input
                  type="text"
                  className="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="message"
                name="message"
                id="message"
                cols="90"
                rows="10"
                placeholder="Message"></textarea>
              <button className="submit-form">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntoductionPage;

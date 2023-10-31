import React from "react";
import AfterNavbar from "../Navbar/AfterNavbar";
import "./MatchPage.css";

const MainPage = () => {
  return (
    <div>
      <AfterNavbar />
      <div className="main-container">
        <div className="motiv-title">
          <h1>Find your partner</h1>
          <h1>Talk with them</h1>
          <h1>Become friends</h1>
        </div>
        <div className="longunderline"></div>
        <div className="language-interest-container">
          <p>Languages: Mongolian(5),</p>
          <p>English(3),</p>
          <p>Korean(1)</p>
        </div>
        <div className="language-interest-container">
          <p>Interests: Coffee,</p>
          <p>Skateboard,</p>
          <p>Photography</p>
        </div>
        <div className="match">
          <a href="RoomPage">
            <button className="match-button">Start Matching ^^</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";
import { Link } from "react-scroll";
import "./AfterNavbar.css";

const AfterNavbar = () => {
  return (
    <nav className="afternav">
      <a href="/" className="title">
        Call App
      </a>
      <ul className="afterul">
        <li>
          <a href="MatchPage">Match</a>
        </li>
        <li>
          <a href="ProfilePage">Profile</a>
        </li>
        <li>
          <a href="FriendsPage">Friends</a>
        </li>
      </ul>
    </nav>
  );
};

export default AfterNavbar;

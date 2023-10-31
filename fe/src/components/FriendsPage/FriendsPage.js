import React from "react";
import AfterNavbar from "../Navbar/AfterNavbar";
import "./FriendsPage.css";

const FriendsPage = () => {
  return (
    <div>
      <AfterNavbar />
      <div className="friends-container">
        <div className="users">
          <h1>Username</h1>
        </div>
        <div className="action">
          <h1>Actions</h1>
        </div>
        <div className="control">
          <h1>Control</h1>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;

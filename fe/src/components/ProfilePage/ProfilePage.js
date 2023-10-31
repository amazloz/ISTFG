import React from "react";
import "./ProfilePage.css";
import profilepic from "../IMGS/profilepic.jpg";
import AfterNavbar from "../Navbar/AfterNavbar";

const ProfilePage = () => {
  return (
    <div className="main-profile-body">
      <AfterNavbar />
      <div className="profile-container">
        <div className="avatar">
          <img src={profilepic} alt="avatar" />
        </div>
        <div className="language-interest-container">
          <button className="add">+ Add Languages</button>
          <p>Mongolia(5),</p>
          <p>English(3),</p>
          <p>Korean(1)</p>
        </div>
        <div className="language-interest-container">
          <button className="add">+ Add Interests</button>
          <p>Coffee,</p>
          <p>Skateboard,</p>
          <p>Photography</p>
        </div>
        <div className="info-container">
          <div className="infos">
            <div className="first-info">
              <p>First Name: Orgil-Od</p>
              <p className="lastname">Last Name: Odsuren</p>
            </div>
            <div className="other-info">
              <p>Birth date: 06/23/2001</p>
              <p>Email address: orgilod44@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="save">
          <button className="last">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

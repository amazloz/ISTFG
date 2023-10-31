import React from "react";
import "./RoomPage.css";
import AfterNavbar from "../Navbar/AfterNavbar";

const RoomPage = () => {
  return (
    <div>
      <AfterNavbar />
      <div className="room-container">
        <div className="video-player"></div>
      </div>
    </div>
  );
};

export default RoomPage;

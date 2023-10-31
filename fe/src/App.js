import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroductionPage from "./components/IntroductionPage/IntroductionPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MainPage from "./components/MainPage/MainPage";
import RoomPage from "./components/RoomPage/RoomPage";
import FriendsPage from "./components/FriendsPage/FriendsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/FriendsPage" element={<FriendsPage />} />
            <Route path="/RoomPage" element={<RoomPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

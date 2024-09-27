import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

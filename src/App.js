import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/login";
import PreLoader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import { connect } from "react-redux"; 
import { initializeApp } from "./redux/app-reducer"; 

function App({ initializeApp, initialized }) { 
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!initialized) return <PreLoader />;

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  connect(mapStateToProps, { initializeApp }) 
)(App);

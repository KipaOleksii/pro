import React from "react";
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import BackgroundLetterAvatars from "../Friends/BackGroundLetterAvatars";

const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
          <NavLink to="/profile" className = { navData => navData.isActive ? style.active : style.item }>Profile</NavLink> 
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" className = { navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/news" className = { navData => navData.isActive ? style.active : style.item }>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/music" className = { navData => navData.isActive ? style.active : style.item }>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/settings" className = { navData => navData.isActive ? style.active : style.item }>Settings</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/friends" className = { navData => navData.isActive ? style.active : style.item }>Friends</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/users" className = { navData => navData.isActive ? style.active : style.item }>Users</NavLink>
        </div>
      </nav>
}
export default Navbar;
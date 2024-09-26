import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
  return (
    <header className={s.header}>
      <img 
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1712966400&semt=ais" 
        alt="Logo"
      />
      <div className={s.login}>
        {isAuth ? (
          // Проверяем, что login — строка, если нет, то показываем резервный текст
          typeof login === "string" ? login : "User"
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getLoginData } from "../../redux/auth-reducer";

const HeaderContainer = ({ isAuth, login, getLoginData }) => {
  useEffect(() => {
    getLoginData(); // Вызов функции через props

  }, [getLoginData]); // Указываем getLoginData в качестве зависимости

  return <Header isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getLoginData })(HeaderContainer);

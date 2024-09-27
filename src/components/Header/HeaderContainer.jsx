import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { usersAPI } from "../../api/api";

const HeaderContainer = ({ setAuthUserData, isAuth, login }) => {
  useEffect(() => {
    usersAPI.getLogin()
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          setAuthUserData(id, email, login);
        }
      });
  }, [setAuthUserData]);

  return <Header isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);

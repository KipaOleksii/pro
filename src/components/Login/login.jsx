import React from 'react';
import styles from './login.module.css';
import LoginForm from './loginForm';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux'; // Подключаем connect из Redux

const Login = ({ isAuth, captchaUrl }) => {
  // Если пользователь авторизован, выполняем редирект на профиль
  if (isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={styles.loginFormContainer}>
      <h2 className={styles.formTitle}>Login</h2>
      <LoginForm captchaUrl={captchaUrl}/>
    </div>
  );
};

// Подключаем к глобальному состоянию
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth, // Получаем isAuth из состояния auth
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps)(Login);

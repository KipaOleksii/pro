import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const LoginForm = ({ login, isAuth }) => {
  const [serverError, setServerError] = useState(''); // Состояние для ошибок с сервера

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required')
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await login(values.email, values.password, values.rememberMe);
  
      // Проверка ответа от сервера
      if (response.data.resultCode !== 0) {
        // Получение сообщения об ошибке
        const errorMessage = response.data.messages && response.data.messages.length > 0
          ? response.data.messages[0]
          : "Ошибка входа"; // Резервное сообщение, если массив пуст
        setServerError(errorMessage); // Установка ошибки
      } else {
        setServerError(""); // Если успешный вход, очищаем ошибку
      }
    } catch (error) {
      // Установка сообщения из catch в случае ошибки
      setServerError(error.message || "Произошла ошибка. Попробуйте позже.");
    } finally {
      // После обработки формы
      setSubmitting(false);
    }
  };
  
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={styles.formInput}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.rememberMe}>
                <Field type="checkbox" name="rememberMe" />
                Remember me
              </label>
            </div>

            {/* Отображение ошибки от сервера */}
            {serverError && <div className={styles.serverError}>{serverError}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(LoginForm);

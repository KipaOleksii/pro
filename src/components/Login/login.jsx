import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.css'

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Логин обязателен'),
    password: Yup.string().required('Пароль обязателен')
  });

  const onSubmit = (values) => {
    console.log('Форма отправлена:', values);
    // Тут можно отправить данные формы на сервер
  };

  return (
    <div className={styles.loginFormContainer}>
    <h2 className={styles.formTitle}>Login</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Login</label>
            <Field
              type="text"
              id="username"
              name="username"
              className={styles.formInput}
            />
            <ErrorMessage
              name="username"
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
                remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
};

export default LoginForm;

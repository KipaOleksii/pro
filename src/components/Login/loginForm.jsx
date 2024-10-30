import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const LoginForm = ({ login, loginError, captchaUrl }) => {

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
    login(values.email, values.password, values.rememberMe, values.captcha);
    setSubmitting(false);
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
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl &&  <Field
                type="input"
                id="captcha"
                name="captcha"
                className={styles.formInput}
              />}

            {loginError && <div className={styles.serverError}>{loginError}</div>}

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
  isAuth: state.auth.isAuth,
  loginError: state.auth.loginError,
});

export default connect(mapStateToProps, { login })(LoginForm);

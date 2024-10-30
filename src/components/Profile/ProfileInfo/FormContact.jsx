import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { saveUserData } from '../../../redux/profile-reducer';
import style from './ProfileInfo.module.css'
const FormContact = ({ saveUserData, profile, setEditMode, errorMessage }) => {

  const initialValues = {
    fullName: profile.fullName,
    aboutMe: profile.aboutMe,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    contacts: {
      facebook: profile.contacts?.facebook,
      website: profile.contacts?.website,
      vk: profile.contacts?.vk,
      twitter: profile.contacts?.twitter,
      instagram: profile.contacts?.instagram,
      youtube: profile.contacts?.youtube,
      github: profile.contacts?.github,
      mainLink: profile.contacts?.mainLink,
    },
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    aboutMe: Yup.string().required('About Me is required'),
    contacts: Yup.object().shape({
      facebook: Yup.string().url('Invalid URL'),
      website: Yup.string().url('Invalid URL'),
      vk: Yup.string().url('Invalid URL'),
      twitter: Yup.string().url('Invalid URL'),
      instagram: Yup.string().url('Invalid URL'),
      youtube: Yup.string().url('Invalid URL'),
      github: Yup.string().url('Invalid URL'),
      mainLink: Yup.string().url('Invalid URL'),
    }),
  });

  const onSubmit = async (values, { resetForm }) => {
    if (errorMessage) {
      return;
    }
    try {
      await saveUserData(values);
      resetForm();
      setEditMode(false); // Закрываем форму после успешной отправки данных
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <Field type="text" id="fullName" name="fullName" />
          <ErrorMessage name="fullName" component="div" />
        </div>

        <div>
          <label htmlFor="aboutMe">About Me:</label>
          <Field type="text" id="aboutMe" name="aboutMe" />
          <ErrorMessage name="aboutMe" component="div" />
        </div>

        <div>
          <label htmlFor="lookingForAJob">Looking for a Job:</label>
          <Field type="checkbox" id="lookingForAJob" name="lookingForAJob" />
        </div>

        <div>
          <label htmlFor="lookingForAJobDescription">Job Description:</label>
          <Field type="text" id="lookingForAJobDescription" name="lookingForAJobDescription" />
          <ErrorMessage name="lookingForAJobDescription" component="div" />
        </div>

        <div>
          <label>Contacts:</label>
          {Object.keys(initialValues.contacts).map((key) => (
            <div key={key}>
              <label htmlFor={`contacts.${key}`}>{key}:</label>
              <Field type="text" id={`contacts.${key}`} name={`contacts.${key}`} />
              <ErrorMessage name={`contacts.${key}`} component="div" />
            </div>
          ))}
        </div>
        {errorMessage && <div className={style.error}>{errorMessage}</div>}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  errorMessage: state.profilePage.errorMessage,
});

export default connect(mapStateToProps, { saveUserData })(FormContact);

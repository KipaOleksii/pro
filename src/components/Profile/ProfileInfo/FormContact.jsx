import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

const FormContact = () => {
  const initialValues = {
    fullName: '',
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: ''
    },
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    aboutMe: Yup.string().required('About Me is required'),
    lookingForAJobDescription: Yup.string().required('Description is required if looking for a job'),
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

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
          <ErrorMessage name="lookingForAJob" component="div" />
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const mapStateToProps = (state) => ({
 profile: state.profilePage.profile
});

export default connect(mapStateToProps)(FormContact);

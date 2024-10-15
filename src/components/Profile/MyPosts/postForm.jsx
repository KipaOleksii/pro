import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styles from './MyPosts.module.css';

const PostForm = ({addPost}) => {

    const initialValues = {
        postText: "",
      };
    
      const validationSchema = Yup.object({
        postText: 
        Yup.string()
        .min(5, 'Your post is too short!')
        .max(100, 'Your post is too long!')
        .required('Please enter a post message'),
      })

      const onSubmit = (values, { resetForm }) => {
        if (values.postText.trim()) {
          addPost(values.postText);
          console.log(values.postText);
          resetForm();
        } else {
          alert("Post cannot be empty");
        }
      };
    return (
        <>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div>
              <label htmlFor="postText">Post message:</label>
            </div>
            <Field
              component="textarea"
              id="postText"
              name="postText"
              placeholder="Enter your post text"
            />
             <ErrorMessage
                name="postText"
                component="div"
                className={styles.errorMessage}
              />
            <div>
              <button type="submit">Send</button>
            </div>
          </Form>
        </Formik>
        </>
    )
}

export default PostForm;
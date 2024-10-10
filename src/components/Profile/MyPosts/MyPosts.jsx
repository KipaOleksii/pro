import React, { useMemo } from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { Field, Form, Formik } from "formik";

const MyPosts = (props) => {
  // Используем useMemo для мемоизации списка постов
  const postsElements = useMemo(() => {
    return props.posts.map((p) => (
      <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} key={p.id} />
    ));
  }, [props.posts]);

  const initialValues = {
    postText: "",
  };

  const onSubmit = (values, { resetForm }) => {
    if (values.postText.trim()) {
      props.addPost(values.postText);
      console.log(values.postText);
      resetForm();
    } else {
      alert("Post cannot be empty");
    }
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
            <div>
              <button type="submit">Send</button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default React.memo(MyPosts);

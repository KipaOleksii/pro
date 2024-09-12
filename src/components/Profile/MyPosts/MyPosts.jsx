import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} key={p.id} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onPostChange}
            placeholder="Enter your text"
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

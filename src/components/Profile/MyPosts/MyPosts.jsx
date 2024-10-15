import React, { useMemo } from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import PostForm from "./postForm";

const MyPosts = (props) => {
  // Используем useMemo для мемоизации списка постов
  const postsElements = useMemo(() => {
    return props.posts.map((p) => (
      <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} key={p.id} />
    ));
  }, [props.posts]);

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
       <PostForm addPost={props.addPost}/>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default React.memo(MyPosts);

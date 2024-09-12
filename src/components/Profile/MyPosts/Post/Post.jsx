import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
    <img src={props.avatar} alt="Avatar" className={s.avatar}></img>
      <div>{props.message}</div>
      <div>Likes: {props.likesCount}</div>
    </div>
  );
};

export default Post;

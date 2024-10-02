import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
    <img src={props.avatar} alt="Avatar" className={style.avatar}></img>
      <div>{props.message}</div>
      <div>Likes: {props.likesCount}</div>
    </div>
  );
};

export default Post;

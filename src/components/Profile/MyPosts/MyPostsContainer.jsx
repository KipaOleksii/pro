import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../redux/profile-reducer";

const MyPostsContainer = () => {
  const posts = useSelector((state) => state.profilePage.posts);
  const dispatch = useDispatch();

  const addPost = (postText) => {
    if (postText.trim()) {
      dispatch(addPostActionCreator(postText));
    }
  };

  return (
    <MyPosts
      posts={posts}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;

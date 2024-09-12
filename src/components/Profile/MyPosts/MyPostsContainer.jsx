import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPostsContainer = () => {
  const posts = useSelector((state) => state.profilePage.posts);
  const newPostText = useSelector((state) => state.profilePage.newPostText);
  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
};

export default MyPostsContainer;

import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, onPhotoSelected}) => {

  return (
    <div className={style.profile}>
      <ProfileInfo profile={profile} onPhotoSelected={onPhotoSelected}/>
      <MyPostsContainer />
    </div>
  );
};


export default Profile;
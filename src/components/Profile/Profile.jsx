import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, onPhotoSelected, saveUserData, authUserId, userId}) => {
  
  return (
    <div className={style.profile}>
      <ProfileInfo profile={profile} onPhotoSelected={onPhotoSelected} saveUserData={saveUserData} authUserId={authUserId} userId={userId}/>
      <MyPostsContainer />
    </div>
  );
};


export default Profile;
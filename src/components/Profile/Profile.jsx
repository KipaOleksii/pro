import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile}) => {

  return (
    <div className={style.profile}>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer />
    </div>
  );
};


export default Profile;
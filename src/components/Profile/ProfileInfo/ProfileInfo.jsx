import React from "react";
import s from "./ProfileInfo.module.css";
import PreLoader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />; 
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
          <img
            className={s.img}
            src="https://img.freepik.com/premium-photo/image-background_9493-6963.jpg"
            alt="background"
          />
        </div>
        <div className={s.info}>
          <p>
          <img src={props.profile.photos.large} alt="User avatar" />
          </p>
          <p>
            {props.profile.aboutMe}
            {props.profile.fullName}
            {props.profile.lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

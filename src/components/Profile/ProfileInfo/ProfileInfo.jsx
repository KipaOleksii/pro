import React from "react";
import style from "./ProfileInfo.module.css";
import PreLoader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <div>
          <img
            className={style.img}
            src="https://img.freepik.com/premium-photo/image-background_9493-6963.jpg"
            alt="background"
          />
        </div>
        <div className={style.info}>
          <p>
            <img src={props.profile.photos.large} alt="User avatar" />
          </p>
          <p>
            Full Name: {props.profile.fullName}
            <br />
            About me: {props.profile.aboutMe}
            <br />
            Description: {props.profile.lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

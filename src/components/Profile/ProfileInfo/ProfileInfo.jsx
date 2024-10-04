import React from "react";
import style from "./ProfileInfo.module.css";
import PreLoader from "../../common/Preloader/Preloader";
import StatusContainer from "./StatusContainer";

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <PreLoader />;
  }

  const { photos, fullName, aboutMe, lookingForAJobDescription } = profile;

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
        <StatusContainer status="Enter status..."/>
          <p>
            <img src={photos.large} alt="User avatar" />
          </p>
          <p>
            Full Name: {fullName}
            <br />
            About me: {aboutMe}
            <br />
            Description: {lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

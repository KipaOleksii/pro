import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
 
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
        <img className={s.img} src="https://img.freepik.com/premium-photo/image-background_9493-6963.jpg" alt="Profile" />
        </div>
        <div className={s.info}>
        <p>
          <img src={props.profile?.photos?.large} alt="" />
          Ava +</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

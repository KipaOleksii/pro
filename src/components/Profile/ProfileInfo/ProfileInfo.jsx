import React from "react";
import style from "./ProfileInfo.module.css";
import PreLoader from "../../common/Preloader/Preloader";
import StatusContainer from "./StatusContainer";

const ProfileInfo = ({ profile, onPhotoSelected }) => {
  if (!profile) {
    return <PreLoader />;
  }

  const { photos, fullName, aboutMe, lookingForAJobDescription, lookingForAJob, contacts } = profile;

  return (
    <div className={style.profileContainer}>
      <div className={style.avatarContainer}>
        <img
          className={style.avatar}
          src={photos.large || "default-avatar.png"} // Показать стандартный аватар, если нет фото
          alt="User avatar"
        />
        <label className={style.uploadButton}>
          <input type="file" onChange={onPhotoSelected} className={style.fileInput} />
          Upload New Photo
        </label>
      </div>
      <div className={style.info}>
        <StatusContainer status="Введите статус..." />
        <p>
        Full Name: {fullName}
          <br />
          About me: {aboutMe}
          <br />
          Looking for a job: {lookingForAJob}
          <br />
          Description: {lookingForAJobDescription}
          <br />
          Contacts:
          <ul>
              {Object.keys(contacts).map((key) => (
                contacts[key] && (
                  <li key={key}>
                    <a href={contacts[key]} target="_blank" rel="noopener noreferrer">
                      {key}: {contacts[key]}
                    </a>
                  </li>
                )
              ))}
            </ul>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;

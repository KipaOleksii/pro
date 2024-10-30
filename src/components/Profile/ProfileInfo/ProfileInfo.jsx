import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import PreLoader from "../../common/Preloader/Preloader";
import StatusContainer from "./StatusContainer";
import FormContact from "./FormContact";

const ProfileInfo = ({ profile, onPhotoSelected, onSubmit, authUserId, userId }) => {
  const [editMode, setEditMode] = useState(false);
  const isOwner = authUserId === userId ;


  if (!profile) {
    return <PreLoader />;
  }

  const {
    photos,
    fullName,
    aboutMe,
    lookingForAJobDescription,
    lookingForAJob,
    contacts,
    status,
  } = profile;

  const renderProfileInfo = () => (
    <div>
      <div><strong>Full Name:</strong> {fullName || "Not provided"}</div>
      <div><strong>About me:</strong> {aboutMe || "Not provided"}</div>
      <div><strong>Looking for a job:</strong> {lookingForAJob ? "Yes" : "No"}</div>
      <div><strong>Description:</strong> {lookingForAJobDescription || "Not provided"}</div>
      <div>
        <strong>Contacts:</strong>
        <ul>
          {Object.keys(contacts).map((key) => (
            <li key={key}>
              <strong>{key}:</strong>{" "}
              {contacts[key] ? (
                <a href={contacts[key]} target="_blank" rel="noopener noreferrer">
                  {contacts[key]}
                </a>
              ) : (
                "----"
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const handleFormSubmit = (formData) => {
    onSubmit(formData); // Сохранение данных
    setEditMode(false); // Закрытие формы после сохранения
  };

  return (
    <div className={style.profileContainer}>
      <div className={style.avatarContainer}>
        <img
          className={style.avatar}
          src={photos.large || "default-avatar.png"}
          alt="User avatar"
        />
        {isOwner && <label className={style.uploadButton}>
          <input
            type="file"
            onChange={onPhotoSelected}
            className={style.fileInput}
          />
          Upload New Photo
        </label>}
      </div>
      <div className={style.info}>
        <StatusContainer status={status || "Введите статус..."} />
        {editMode ? (
          <FormContact profile={profile} onSubmit={handleFormSubmit} setEditMode={setEditMode} />
        ) : (
          renderProfileInfo()
        )}
        {isOwner && (<button onClick={() => setEditMode(true)}>Edit Profile</button>)}
      </div>
    </div>
  );
};

export default ProfileInfo;

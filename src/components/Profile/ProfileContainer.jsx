import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile, savePhoto, saveUserData } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const ProfileContainer = ({ profile, getUserProfile, savePhoto, saveUserData, authUserId }) => {
  const { userId: paramUserId } = useParams(); // Получаем userId из параметров URL
  const userId = paramUserId || authUserId; // Если userId отсутствует в параметрах URL, используем authUserId

  useEffect(() => {
    if (userId) {
      getUserProfile(userId); // Вызываем экшен напрямую
    }
  }, [userId, getUserProfile]); // Добавляем зависимости

  const onPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]); // Вызываем экшен с новым фото
    }
  };

  return <Profile profile={profile} onPhotoSelected={onPhotoSelected} saveUserData={saveUserData} authUserId={authUserId} userId={userId} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile, // Привязываем state к пропсам
  authUserId: state.auth.id, // Получаем id текущего авторизованного пользователя
});

export default compose(
  connect(mapStateToProps, { getUserProfile, savePhoto, saveUserData }),
  withAuthRedirect
)(ProfileContainer);

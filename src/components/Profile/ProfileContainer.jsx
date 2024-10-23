import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile, savePhoto } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const ProfileContainer = ({ profile, getUserProfile, savePhoto }) => {
  const { userId } = useParams(); // Получаем userId из параметров URL
  
  useEffect(() => {
    getUserProfile(userId); // Вызываем экшен напрямую
  }, [userId, getUserProfile]); // Добавляем зависимости
  const onPhotoSelected = (event) => {
    if(event.target.files.length) {
     savePhoto(event.target.files[0]); // Вызываем экшен с новым фото
   }}
  return <Profile profile={profile} onPhotoSelected={onPhotoSelected}/>;
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile, // Привязываем state к пропсам
});

export default compose(connect(mapStateToProps, { getUserProfile, savePhoto }), withAuthRedirect) (ProfileContainer);

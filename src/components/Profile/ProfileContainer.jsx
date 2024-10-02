import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

const ProfileContainer = ({ profile, getUserProfile }) => {
  const { userId } = useParams(); // Получаем userId из параметров URL

  useEffect(() => {
    getUserProfile(userId); // Вызываем экшен напрямую
  }, [userId, getUserProfile]); // Добавляем зависимости

  return <Profile profile={profile} />;
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile, // Привязываем state к пропсам
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);

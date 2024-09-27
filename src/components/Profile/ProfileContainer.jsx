import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { usersAPI } from "../../api/api";



const ProfileContainer = ({ setUsersProfile, profile }) => {
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserProfile = async (userId) => {
      try {
        const response = await usersAPI.getProfile(userId);
        setUsersProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    
    fetchUserProfile(userId || 1);
  }, [userId, setUsersProfile]);

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);

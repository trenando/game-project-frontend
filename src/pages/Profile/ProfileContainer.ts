import { connect } from "react-redux";
import { getProfile } from "../../redux/actions/profileActions/profileActions";
import { Profile } from "./Profile";
import { ProfileStateToProps, ProfileDispatch } from "./ProfileTypes";

const mapStateToProps: ProfileStateToProps = ({ profile, auth }) => {
  return {
    login: profile.login,
    name: profile.name,
    surname: profile.surname,
    gender: profile.gender,
    age: profile.age,
    postCount: profile.postCount,
    subCount: profile.subCount,
    isAuth: auth.isAuth,
  };
};

const mapDispatchToProps: ProfileDispatch = (dispatch) => {
  return {
    getMyProfile: () => {
      dispatch(getProfile());
    },
  };
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/profileActions/profileActions";
import { Profile } from "./Profile";
import { AuthSelector, AuthState, GetMyProfileDispatch, ProfileProps, ProfileSelector, ProfileState } from "./ProfileTypes";

export const ProfileContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const profileSelector: ProfileSelector = useSelector(({ profile }: ProfileState) => profile)
  const authSelector: AuthSelector = useSelector(({ auth }: AuthState) => auth);
  const getMyProfile:GetMyProfileDispatch = () => dispatch(getProfile());
  const profileProps: ProfileProps = {
    ...profileSelector, ...authSelector, getMyProfile
  }
  return <Profile {...profileProps} />
}

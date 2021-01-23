import EditProfileContainer from "./EditProfileContainer";
import { getMe } from "../../../redux/usersSlice";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
  };
}
function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    token: state.usersReducer.token,
    myAvatar: state.usersReducer.myAvatar,
    myInfo: state.usersReducer.myInfo,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);

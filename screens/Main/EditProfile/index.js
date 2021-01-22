import EditProfileContainer from "./EditProfileContainer";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    token: state.usersReducer.token,
  };
}
export default connect(mapStateToProps, null)(EditProfileContainer);

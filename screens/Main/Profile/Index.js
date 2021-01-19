import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";

import { getMe, getFollowee, getFollower } from "../../../redux/usersSlice";
function mapDispatchToProps(dispatch) {
  return {
    getFollowee: () => dispatch(getFollowee()),
    getFollower: () => dispatch(getFollower()),
    getMe: () => dispatch(getMe()),
  };
}

function mapStateToProps(state) {
  return {
    likes: state.postsReducer.likes,
    comments: state.postsReducer.comments,
    token: state.usersReducer.token,
    followees: state.usersReducer.followees,
    followers: state.usersReducer.followers,
    user: state.usersReducer.user,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

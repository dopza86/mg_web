import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";

import {
  getMe,
  getFollowee,
  getFollower,
  getMyPost,
} from "../../../redux/usersSlice";
import { searchPost } from "../../../redux/postsSlice";
function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    followees: state.usersReducer.followees,
    followers: state.usersReducer.followers,
    user: state.usersReducer.user,
    myPost: state.usersReducer.myPost,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getFollowee: () => dispatch(getFollowee()),
    getFollower: () => dispatch(getFollower()),
    getMe: () => dispatch(getMe()),
    getMyPost: (pk) => dispatch(getMyPost(pk)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

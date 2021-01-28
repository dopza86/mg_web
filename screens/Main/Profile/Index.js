import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";

import {
  getMe,
  getFollowee,
  getFollower,
  getMyPost,
  getPost,
} from "../../../redux/usersSlice";

function mapDispatchToProps(dispatch) {
  return {
    getFollowee: () => dispatch(getFollowee()),
    getFollower: () => dispatch(getFollower()),
    getMe: () => dispatch(getMe()),
    getMyPost: (pk) => dispatch(getMyPost(pk)),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    followees: state.usersReducer.followees,
    followers: state.usersReducer.followers,
    user: state.usersReducer.user,
    myPost: state.usersReducer.myPost,
    loading: state.usersReducer.loading,
    likes: state.postsReducer.likes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

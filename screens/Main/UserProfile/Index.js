import UserProfileContainer from "./UserProfileContainer";
import { connect } from "react-redux";

import {
  getMe,
  getFollowee,
  getFollower,
  getUserPost,
  getPost,
} from "../../../redux/usersSlice";

function mapDispatchToProps(dispatch) {
  return {
    getFollowee: () => dispatch(getFollowee()),
    getFollower: () => dispatch(getFollower()),
    getMe: () => dispatch(getMe()),
    getUserPost: (userId) => dispatch(getUserPost(userId)),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    followees: state.usersReducer.followees,
    followers: state.usersReducer.followers,
    user: state.usersReducer.user,
    userPost: state.usersReducer.userPost,
    loading: state.usersReducer.loading,
    likes: state.postsReducer.likes,
    loadingUserPost: state.usersReducer.loadingUserPost,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);

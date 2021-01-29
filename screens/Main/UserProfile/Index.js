import UserProfileContainer from "./UserProfileContainer";
import { connect } from "react-redux";

import {
  getMe,
  getFollowee,
  getFollower,
  getUserPost,
  getPost,
  getPostUser,
} from "../../../redux/usersSlice";
function mapDispatchToProps(dispatch) {
  return {
    getFollowee: (userId) => dispatch(getFollowee(userId)),
    getFollower: (userId) => dispatch(getFollower(userId)),
    getMe: () => dispatch(getMe()),
    getUserPost: (userId) => dispatch(getUserPost(userId)),
    getPostUser: (postUserId) => dispatch(getPostUser(postUserId)),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    userfollowers: state.usersReducer.userfollowers,
    userfollowees: state.usersReducer.userfollowees,
    followers: state.usersReducer.followers,
    user: state.usersReducer.user,
    userPost: state.usersReducer.userPost,
    loading: state.usersReducer.loading,
    likes: state.postsReducer.likes,
    loadingUserPost: state.usersReducer.loadingUserPost,
    postUser: state.usersReducer.postUser,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);

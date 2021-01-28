import PostDetailContainer from "./PostDetailContainer";
import { connect } from "react-redux";
import { getMe, getMyPost } from "../../../redux/usersSlice";
import { getPost } from "../../../redux/postsSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
    getMyPost: (pk) => dispatch(getMyPost(pk)),
    getPost: (postId) => dispatch(getPost(postId)),
  };
}

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    token: state.usersReducer.token,
    myPost: state.usersReducer.myPost,
    likes: state.postsReducer.likes,
    comments: state.postsReducer.comments,
    commentsPage: state.postsReducer.commentsPage,
    followers: state.usersReducer.followers,
    post: state.postsReducer.post,
    loading: state.postsReducer.loading,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailContainer);

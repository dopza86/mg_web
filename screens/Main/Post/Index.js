import PostContainer from "./PostContainer";
import { connect } from "react-redux";
import { getPosts, increasePage } from "../../../redux/postsSlice";
import { getMe } from "../../../redux/usersSlice";
function mapDispatchToProps(dispatch) {
  return {
    getPosts: (page) => dispatch(getPosts(page)),
    increasePage: () => dispatch(increasePage()),
    getMe: () => dispatch(getMe()),
  };
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.explore.posts,
    page: state.postsReducer.explore.page,
    likes: state.postsReducer.likes,
    comments: state.postsReducer.comments,
    token: state.usersReducer.token,
    commentsPage: state.postsReducer.commentsPage,
    followers: state.usersReducer.followers,
    user: state.usersReducer.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

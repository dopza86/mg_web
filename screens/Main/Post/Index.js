import PostContainer from "./PostContainer";
import { connect } from "react-redux";
import { getPosts, increasePage } from "../../../redux/postsSlice";

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (page) => dispatch(getPosts(page)),
    increasePage: () => dispatch(increasePage()),
    getComment: () => dispatch(getComment()),
  };
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.explore.posts,
    page: state.postsReducer.explore.page,
    likes: state.postsReducer.likes,
    comments: state.postsReducer.comments,
    token: state.usersReducer.token,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

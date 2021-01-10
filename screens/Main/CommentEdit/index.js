import { connect } from "react-redux";
import CommentEditContainer from "./CommentEditContainer";
import { getComment } from "../../../redux/postsSlice";

function mapStateToProps(state) {
  return {
    comments: state.postsReducer.comments,
    user: state.usersReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: (postId, commentsPage) =>
      dispatch(getComment(postId, commentsPage)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEditContainer);

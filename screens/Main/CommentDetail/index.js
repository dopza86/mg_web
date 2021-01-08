import React from "react";
import { connect } from "react-redux";
import { increaseCommentsPage, getComment } from "../../../redux/postsSlice";

import CommentDetailContainer from "./CommentDetailContainer";

function mapDispatchToProps(dispatch) {
  return {
    increaseCommentsPage: () => dispatch(increaseCommentsPage()),
    getComment: (postId, commentsPage) =>
      dispatch(getComment(postId, commentsPage)),
  };
}

function mapStateToProps(state) {
  return {
    comments: state.postsReducer.comments,
    commentsPage: state.postsReducer.commentsPage,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetailContainer);

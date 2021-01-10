import React from "react";
import { connect } from "react-redux";
import { increaseCommentsPage, getComment } from "../../../redux/postsSlice";
import { getMe } from "../../../redux/usersSlice";

import CommentDetailContainer from "./CommentDetailContainer";

function mapStateToProps(state) {
  return {
    comments: state.postsReducer.comments,
    commentsPage: state.postsReducer.commentsPage,
    user: state.usersReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCommentsPage: () => dispatch(increaseCommentsPage()),
    getComment: (postId, commentsPage) =>
      dispatch(getComment(postId, commentsPage)),
    getMe: () => dispatch(getMe()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetailContainer);

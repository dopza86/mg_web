import React, { useEffect } from "react";
import CommentEditPresenter from "./CommentEditPresenter";

export default ({ comments, user, route, getComment }) => {
  const {
    params: { c, token, post },
  } = route;

  const comment = c;

  useEffect(() => {
    getComment(post.id, 1);
  }, [comment]);

  return (
    <CommentEditPresenter
      comments={comments}
      comment={comment}
      user={user}
      token={token}
      post={post}
      // getComment={getComment}
    />
  );
};

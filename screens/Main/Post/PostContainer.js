import React, { useEffect, useState } from "react";
import PostPresenter from "./PostPresenter";

export default ({
  getPosts,
  posts,
  increasePage,
  page,
  comments,
  followers,
  likes,
  token,
}) => {
  useEffect(() => {
    getPosts(1);
  }, []);
  useEffect(() => {
    getPosts(1);
  }, [comments]);
  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    getPosts(1);
  }, [likes]);
  useEffect(() => {
    getPosts(1);
  }, [followers]);

  return (
    <PostPresenter
      posts={posts}
      increasePage={increasePage}
      token={token}
      commentsPage={1}
    />
  );
};

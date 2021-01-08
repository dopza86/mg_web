import React, { useEffect, useState } from "react";
import PostPresenter from "./PostPresenter";

export default ({
  getPosts,
  posts,
  increasePage,
  page,
  comments,

  likes,
  token,
}) => {
  useEffect(() => {
    getPosts(1);
  }, []);
  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    getPosts(1);
  }, [likes]);

  useEffect(() => {
    getPosts(1);
  }, [comments]);

  return (
    <PostPresenter
      posts={posts}
      increasePage={increasePage}
      token={token}
      commentsPage={1}
    />
  );
};

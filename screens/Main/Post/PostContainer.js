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
  user,
  getMe,
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
  useEffect(() => {
    getMe();
  }, []);
  const onScroll = (e) => {
    const {
      nativeEvent: {
        layoutMeasurement,
        contentOffset: { y },
        contentSize: { height },
      },
    } = e;
    let paddingToBottom = 1;
    paddingToBottom += layoutMeasurement.height;

    if (y + paddingToBottom >= height) {
      console.log(height);
      increasePage();
    } else {
      return;
    }
  };
  return (
    <PostPresenter
      posts={posts}
      increasePage={increasePage}
      token={token}
      me={user}
      onScroll={onScroll}
    />
  );
};

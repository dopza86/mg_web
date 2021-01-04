import React, { useEffect, useState } from "react";
import PostPresenter from "./PostPresenter";

export default ({ getPosts, posts, increasePage, page, likes }) => {
  useEffect(() => {
    getPosts(1);
  }, []);
  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    getPosts(1);
  }, [likes]);

  return <PostPresenter posts={posts} increasePage={increasePage} />;
};

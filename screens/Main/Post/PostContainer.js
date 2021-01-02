import React, { useEffect, useState } from "react";
import PostPresenter from "./PostPresenter";

export default ({ getPosts, posts, increasePage, page }) => {
  useEffect(() => {
    getPosts(1);
  }, []);
  useEffect(() => {
    getPosts(page);
  }, [page]);
  console.log(posts);
  return <PostPresenter posts={posts} increasePage={increasePage} />;
};

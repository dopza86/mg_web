import React, { useEffect } from "react";
import PostDetailPresenter from "./PostDetailPresenter";

export default ({ route, user, token, getPost, post, likes, loading }) => {
  const {
    params: { postObj },
  } = route;
  const postId = postObj.id;
  console.log(post);
  useEffect(() => {
    getPost(postId);
  }, []);
  useEffect(() => {
    getPost(postId);
  }, [likes]);
  return (
    <PostDetailPresenter
      token={token}
      me={user}
      postObj={post}
      loading={loading}
    />
  );
};

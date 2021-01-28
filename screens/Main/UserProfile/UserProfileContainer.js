import React, { useEffect } from "react";

import UserProfilePresenter from "./UserProfilePresenter";

export default ({
  getFollowee,
  getFollower,
  followees,
  followers,
  loadingUserPost,
  token,
  getUserPost,
  userPost,
  getMe,
  likes,
  route,
}) => {
  const {
    params: { user },
  } = route;
  useEffect(() => {
    getFollowee();
  }, []);
  useEffect(() => {
    getFollower();
  }, []);
  useEffect(() => {
    getUserPost(user.id);
  }, []);
  useEffect(() => {
    getUserPost(user.id);
  }, [likes]);
  useEffect(() => {
    getMe();
  }, []);

  console.log(userPost);
  return (
    <UserProfilePresenter
      user={user}
      followees={followees}
      followers={followers}
      userPost={userPost}
      userPostLength={userPost.length === 0 ? 0 : userPost[0].my_posts_length}
      token={token}
      loadingUserPost={loadingUserPost}
    />
  );
};

import React, { useEffect } from "react";
import api from "../../../api";

import UserProfilePresenter from "./UserProfilePresenter";

export default ({
  getFollowee,
  getFollower,

  followers,
  loadingUserPost,
  token,
  getUserPost,
  userPost,
  userfollowers,
  userfollowees,
  likes,
  route,
  getPostUser,
}) => {
  const {
    params: { user },
  } = route;

  const postUserId = user.id;

  useEffect(() => {
    getFollowee(postUserId);
    getFollower(postUserId);
    getUserPost(user.id);
    getPostUser(postUserId);
  }, []);
  useEffect(() => {
    getUserPost(user.id);
  }, [likes]);

  useEffect(() => {
    getUserPost(user.id);
    getFollowee(postUserId);
    getPostUser(postUserId);
  }, [followers]);
  console.log(followers);
  const is_follower = followers.find((follower) => follower.id === user.id);
  console.log(is_follower);
  return (
    <UserProfilePresenter
      user={user}
      followers={userfollowers}
      followees={userfollowees}
      is_follower={is_follower === undefined ? false : true}
      userPost={userPost}
      userPostLength={userPost.length === 0 ? 0 : userPost[0].my_posts_length}
      token={token}
      loadingUserPost={loadingUserPost}
    />
  );
};

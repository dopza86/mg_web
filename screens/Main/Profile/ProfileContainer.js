import React, { useEffect } from "react";

import ProfilePresenter from "./ProfilePresenter";

export default ({
  getFollowee,
  getFollower,
  followees,
  followers,
  user,
  token,
  getMyPost,
  myPost,
  getMe,
}) => {
  useEffect(() => {
    getFollowee();
  }, []);
  useEffect(() => {
    getFollower();
  }, []);
  useEffect(() => {
    getMyPost(user.id);
  }, []);
  useEffect(() => {
    getMe();
  }, []);

  return (
    <ProfilePresenter
      user={user}
      followees={followees}
      followers={followers}
      myPost={myPost}
      token={token}
    />
  );
};

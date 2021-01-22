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

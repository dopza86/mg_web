import React from "react";
import { useEffect } from "react/cjs/react.development";
import ProfilePresenter from "./ProfilePresenter";

export default ({
  getFollowee,
  getFollower,
  likes,
  comments,
  token,
  followees,
  followers,
  user,
}) => {
  useEffect(() => {
    getFollowee();
  }, []);
  useEffect(() => {
    getFollower();
  }, []);

  return <ProfilePresenter />;
};

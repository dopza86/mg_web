import React, { useEffect } from "react";
import EditProfilePresenter from "./EditProfilePresenter";

export default ({ token, user, getMe, myAvatar, myInfo }) => {
  useEffect(() => {
    getMe();
  }, []);
  useEffect(() => {
    getMe();
  }, [myAvatar]);
  useEffect(() => {
    getMe();
  }, [myInfo]);

  return <EditProfilePresenter token={token} user={user} />;
};

import React from "react";
import EditProfilePresenter from "./EditProfilePresenter";

export default ({ token, user }) => {
  return <EditProfilePresenter token={token} user={user} />;
};

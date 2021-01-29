import React from "react";

import FolloweeListPresenter from "./FolloweeListPresenter";

export default ({ route }) => {
  const {
    params: { followers },
  } = route;
  const myfollowees = followers;
  return <FolloweeListPresenter myfollowees={myfollowees} />;
};

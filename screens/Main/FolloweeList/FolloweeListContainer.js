import React from "react";

import FolloweeListPresenter from "./FolloweeListPresenter";

export default ({ route, myFollowers, user }) => {
  const {
    params: { followers },
  } = route;
  const myfollowees = followers;

  // const is_follower = myFollowers.find((follower) => follower.id === user.id);
  console.log(myFollowers);
  return <FolloweeListPresenter myfollowees={myFollowers} />;
};

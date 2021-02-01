import React from "react";

import FollowerListPresenter from "./FollowerListPresenter";

export default ({ route }) => {
  const {
    params: { followees },
  } = route;
  const myfollowers = followees;
  console.log(followees);
  return <FollowerListPresenter myfollowers={myfollowers} />;
};

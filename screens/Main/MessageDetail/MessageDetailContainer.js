import React from "react";
import MessageDetailPresenter from "./MessageDetailPresenter";

export default ({ route }) => {
  const {
    params: { token, user },
  } = route;
  console.log(token, user);
  return <MessageDetailPresenter token={token} postUser={user} />;
};

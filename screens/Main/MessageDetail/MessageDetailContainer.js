import React, { useEffect } from "react";
import MessageDetailPresenter from "./MessageDetailPresenter";
import { useDispatch } from "react-redux";

export default ({ route, getMe, me, conversations, goConversation }) => {
  const dispatch = useDispatch();
  const {
    params: { token, user },
  } = route;
  useEffect(() => {
    getMe();
  }, []);
  // useEffect(() => {
  //   goConversation(user.id);
  // }, [conversations]);
  const userId = user.id;

  const conversationId = conversations.id;

  return (
    <MessageDetailPresenter
      token={token}
      postUser={user}
      me={me}
      conversationId={conversationId}
    />
  );
};

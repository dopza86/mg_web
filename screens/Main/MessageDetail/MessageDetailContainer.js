import React, { useEffect } from "react";
import MessageDetailPresenter from "./MessageDetailPresenter";
import { useDispatch } from "react-redux";

export default ({
  route,
  getMe,
  me,
  conversations,
  goConversation,
  getMessage,
  page,
  messages,
  increasePage,
}) => {
  const dispatch = useDispatch();
  const {
    params: { token, user },
  } = route;

  const userId = user.id;
  const conversationId = conversations.id;
  useEffect(() => {
    getMe();
  }, []);
  useEffect(() => {
    getMessage(1);
  }, [conversations]);

  useEffect(() => {
    getMessage(page);
  }, [page]);

  return (
    <MessageDetailPresenter
      token={token}
      postUser={user}
      me={me}
      conversationId={conversationId}
      increasePage={increasePage}
      messages={messages}
    />
  );
};

import React, { useEffect, useState } from "react";
import CommentDetailPresenter from "./CommentDetailPresenter";
import { useNavigation } from "@react-navigation/native";
// import { getComment } from "../../../redux/postsSlice";

export default ({
  route,
  comments,
  getComment,
  getMe,
  user,
  increaseCommentsPage,
  commentsPage,
}) => {
  const navigation = useNavigation();
  const {
    params: { post, token },
  } = route;

  useEffect(() => {
    getComment(post.id, 1);
  }, []);

  useEffect(() => {
    getComment(post.id, commentsPage);
  }, [commentsPage]);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <CommentDetailPresenter
      navigation={navigation}
      post={post}
      comments={comments}
      token={token}
      user={user}
      increaseCommentsPage={increaseCommentsPage}
    />
  );
};

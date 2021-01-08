import React, { useEffect, useState } from "react";
import CommentDetailPresenter from "./CommentDetailPresenter";
import { useNavigation } from "@react-navigation/native";
// import { getComment } from "../../../redux/postsSlice";

export default ({ route, comments, getComment }) => {
  const navigation = useNavigation();
  const {
    params: { post, token },
  } = route;

  useEffect(() => {
    getComment(post.id, 1);
  }, []);

  return (
    <CommentDetailPresenter
      navigation={navigation}
      post={post}
      comments={comments}
    />
  );
};

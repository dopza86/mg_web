import React, { useEffect, useState } from "react";
import PostPresenter from "./PostPresenter";

export default ({ getPosts, posts, increasePage, page, likes, token }) => {
  useEffect(() => {
    getPosts(1);
  }, []);
  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    getPosts(1);
  }, [likes]);
  // const [comment, setComment] = useState("");
  // const isFormValid = () => {
  //   if (comment === "") {
  //     alert("댓글을 입력 해주세요");
  //     return false;
  //   }

  //   return true;
  // };
  // const addComment = async () => {
  //   if (!isFormValid()) {
  //     return;
  //   }
  //   const form = {
  //     text: comment,
  //   };

  //   try {
  //     const { status } = await api.goComment(1, form, token);

  //     if (status === 201) {
  //       alert("댓글이 등록되었습니다");
  //       setComment("");
  //     }
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // };
  return (
    <PostPresenter
      posts={posts}
      increasePage={increasePage}
      // comment={comment}
      // setComment={setComment}
      // addComment={addComment}
      token={token}
    />
  );
};

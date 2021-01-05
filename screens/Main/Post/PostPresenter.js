import React, { useState } from "react";
import styled from "styled-components/native";
import PostCard from "../../../components/PostCard";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../../api";
import CommentPresenter from "../../../components/CommentPresenter";
import { useDispatch } from "react-redux";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadMore = styled.View`
  width: 100%;
  padding: 10px 10px;
  align-items: center;
  background-color: #006a70;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const LoadMoreText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export default ({ posts, increasePage, token }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [comment, setComment] = useState("");
  const [postId, setPostId] = useState("");
  const isFormValid = () => {
    if (comment === "") {
      alert("댓글을 입력 해주세요");
      return false;
    }

    return true;
  };
  const addComment = (postId) => async () => {
    if (!isFormValid()) {
      return;
    }

    const form = {
      text: comment,
    };

    try {
      const { status } = await api.goComment(postId, form, token);

      if (status === 201) {
        alert("댓글이 등록되었습니다");
        setComment("");
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Container>
      {posts.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingTop: 30 }}
          >
            {posts.map((post) => (
              <>
                <PostCard
                  key={post.id}
                  id={post.id}
                  user={post.user}
                  avatar={post.user.avatar}
                  photos={post.photos}
                  name={post.name}
                  postObj={post}
                  caption={post.caption}
                  location={post.location}
                  created={post.created}
                  isLiked={post.is_liked}
                  like_count={post.like_list ? post.like_list.count_users : 0}
                  comment_count={post.comment_list.length}
                />

                <CommentPresenter
                  comment={comment}
                  setComment={setComment}
                  addComment={async () => dispatch(addComment(post.id))}
                />
              </>
            ))}
          </ScrollView>
        </>
      )}
    </Container>
  );
};

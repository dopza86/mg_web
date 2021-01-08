import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import CommentPresenter from "../../../components/CommentPresenter";

import { addComment } from "../../../redux/postsSlice";

const Container = styled.View`
  width: 100%;
`;
const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;
const Touchable = styled.TouchableOpacity``;
const HeaderUserContainer = styled.View`
  margin-left: 10px;
`;
const Bold = styled.Text`
  font-weight: 500;
`;
const Location = styled.Text`
  font-size: 12px;
`;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;
const IconContainer = styled.View`
  margin-right: 10px;
`;
const InfoContainer = styled.View`
  padding: 10px;
`;
const Caption = styled.Text`
  margin: 5px 0px;
`;

const CommentContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Comment = styled.View`
  height: 35px;
  width: 90%;
  background-color: "opacity";
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);

  justify-content: center;
  padding-left: 5px;
`;

export default ({ navigation, post, comments }) => {
  const dispatch = useDispatch();

  const [comment, setComments] = useState("");
  const onSubmit = (postId, comment) => {
    dispatch(addComment(postId, comment));
    setComments("");
  };

  return (
    <>
      <Touchable onPress={() => navigation.goBack()}>
        <IconsContainer>
          <IconContainer>
            <Ionicons name="arrow-back" size={24} color="black" />
          </IconContainer>

          <IconContainer>뒤로가기</IconContainer>
        </IconsContainer>
      </Touchable>

      <Container>
        <Header>
          <Touchable>
            <Image
              style={{ height: 40, width: 40, borderRadius: 20 }}
              source={{ uri: post.user.avatar }}
            />
          </Touchable>
          <Touchable>
            <HeaderUserContainer>
              <Bold>{post.user.username}</Bold>
              <Location>{post.location}</Location>
            </HeaderUserContainer>
          </Touchable>
        </Header>
        <InfoContainer>
          <Caption>
            <Bold>{post.user.username}</Bold> {post.caption}
          </Caption>
        </InfoContainer>
        {comments.map((c) => (
          <CommentContainer>
            <Comment>
              {c.text}
              {c.user.username}
            </Comment>
          </CommentContainer>
        ))}
        <CommentPresenter
          comment={comment}
          setComments={setComments}
          addComment={() => onSubmit(post.id, comment)}
        />
      </Container>
    </>
  );
};

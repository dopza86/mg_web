import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import CommentPresenter from "../../../components/CommentPresenter";
import { MaterialIcons } from "@expo/vector-icons";

import { addComment, deleteComment } from "../../../redux/postsSlice";

const Container = styled.View`
  width: 100%;
  align-items: center;
`;
const Header = styled.View`
  width: 99%;
  padding: 15px;
  flex-direction: row;
  align-items: flex-start;

  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);
`;
const Touchable = styled.TouchableOpacity``;
const UserTouchable = styled.TouchableOpacity`
  align-items: center;
  margin-right: 15px;
`;
const HeaderUserContainer = styled.View`
  margin-left: 10px;
`;
const Bold = styled.Text`
  font-weight: 500;
  font-size: 12px;
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
  align-items: center;
`;
const InfoContainer = styled.View`
  padding: 10px;
  margin-left: 10px;
`;
const Caption = styled.Text`
  margin: 5px 0px;
  font-size: 12px;
`;

const CommentContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;

  align-items: center;
  padding: 10px 10px;
`;

const Comment = styled.View`
  width: 90%;
  background-color: "opacity";
  justify-content: center;
  padding-left: 5px;
`;

const CommentUserName = styled.Text`
  font-weight: 500;
  font-size: 12px;
`;

const Back = styled.Text`
  padding-top: 4px;
`;

const CommentText = styled.Text`
  font-size: 12px;
`;

const CommentTextContainer = styled.View`
  margin-left: 10px;
  margin-bottom: 15px;
  flex-direction: row;
`;
const CommentTouchable = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #e8e8e8;
`;

const MyCommentTouchable = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #deeeff;
`;

const CommentBtn = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;

const Total = styled.View`
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);
`;
export default ({ navigation, post, comments, token, user }) => {
  const dispatch = useDispatch();

  const [comment, setComments] = useState("");
  const onSubmit = (postId, comment) => {
    dispatch(addComment(postId, comment));
    setComments("");
  };

  return (
    <>
      <Total>
        <Touchable onPress={() => navigation.goBack()}>
          <IconsContainer>
            <IconContainer>
              <Ionicons name="arrow-back" size={24} color="black" />
            </IconContainer>
            <Back>뒤로가기</Back>
          </IconsContainer>
        </Touchable>

        <Container>
          <Header>
            <UserTouchable>
              <Image
                style={{ height: 35, width: 35, borderRadius: 20 }}
                source={{ uri: post.user.avatar }}
              />
              <HeaderUserContainer>
                <Bold>{post.user.username}</Bold>
              </HeaderUserContainer>
            </UserTouchable>

            <Caption>{post.caption}</Caption>
          </Header>
        </Container>
        {comments.map((c) => (
          <CommentContainer key={c.id}>
            <Comment>
              {c.user.id === user.id ? (
                <>
                  {" "}
                  <MyCommentTouchable>
                    <Image
                      style={{ height: 20, width: 20, borderRadius: 20 }}
                      source={{ uri: `http://127.0.0.1:8000${c.user.avatar}` }}
                    />
                    <CommentUserName> {c.user.username}</CommentUserName>
                  </MyCommentTouchable>
                  <CommentTextContainer>
                    <CommentText>{c.text} </CommentText>
                  </CommentTextContainer>
                  <CommentBtn>
                    <TouchableOpacity
                      style={{ marginRight: 5 }}
                      onPress={() =>
                        navigation.navigate("CommentEdit", { c, token })
                      }
                    >
                      <Ionicons name="pencil" size={15} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => dispatch(deleteComment(c.id, token))}
                    >
                      <MaterialIcons name="delete" size={15} color="black" />
                    </TouchableOpacity>
                  </CommentBtn>
                </>
              ) : (
                <>
                  {" "}
                  <CommentTouchable>
                    <Image
                      style={{ height: 20, width: 20, borderRadius: 20 }}
                      source={{ uri: `http://127.0.0.1:8000${c.user.avatar}` }}
                    />
                    <CommentUserName> {c.user.username}</CommentUserName>
                  </CommentTouchable>
                  <CommentTextContainer>
                    <CommentText>{c.text} </CommentText>
                  </CommentTextContainer>
                </>
              )}
            </Comment>
          </CommentContainer>
        ))}
      </Total>
      <CommentPresenter
        comment={comment}
        setComments={setComments}
        addComment={() => onSubmit(post.id, comment)}
      />
    </>
  );
};

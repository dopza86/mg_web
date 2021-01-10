import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { editComment } from "../../../redux/postsSlice";
import styled from "styled-components/native";
import SmallBtn from "../../../components/Auth/SmallBtn";
import { useDispatch } from "react-redux";

const Touchable = styled.TouchableOpacity``;
const Back = styled.Text`
  padding-top: 4px;
`;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;
const IconContainer = styled.View`
  margin-right: 10px;
  align-items: center;
`;

const CommentContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
`;

const CommentInput = styled.TextInput`
  height: 120px;
  width: 90%;
  background-color: "opacity";
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);

  justify-content: center;
  padding-left: 5px;
`;

const CommentBtnContainer = styled.View`
  width: 90%;
  justify-content: center
  flex-direction: row;
`;

const InputText = styled.Text``;

export default ({ comments, user, comment, token, post }) => {
  const [inputComment, setInputComment] = useState(comment.text);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onSubmit = async (commentId, inputComment, token, postId) => {
    await dispatch(editComment(commentId, inputComment, token, postId));
    navigation.navigate("CommentDetail");
  };

  return (
    <>
      <Touchable onPress={() => navigation.goBack()}>
        <IconsContainer>
          <IconContainer>
            <Ionicons name="arrow-back" size={24} color="black" />
          </IconContainer>
          <Back>뒤로가기</Back>
        </IconsContainer>
      </Touchable>
      <CommentContainer>
        <CommentInput
          value={inputComment}
          onChangeText={(text) => setInputComment(text)}
          placeholder="댓글을 수정해주세요"
          multiline={true}
        />
      </CommentContainer>
      <CommentBtnContainer>
        <SmallBtn
          text={"수정하기"}
          accent
          onPress={() => onSubmit(comment.id, inputComment, token, post.id)}
        />
      </CommentBtnContainer>
    </>
  );
};

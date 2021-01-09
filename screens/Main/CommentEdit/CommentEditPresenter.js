import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import SmallBtn from "../../../components/Auth/SmallBtn";

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

export default () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <CommentContainer>
        <CommentInput
          value={comment}
          onChangeText={(text) => setComment(text)}
          placeholder="댓글을 수정해주세요"
          multiline={true}
        />
      </CommentContainer>
      <CommentBtnContainer>
        <SmallBtn text={"수정하기"} accent />
      </CommentBtnContainer>
    </>
  );
};

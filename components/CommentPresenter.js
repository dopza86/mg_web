import React from "react";
import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

const CommentContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const CommentInput = styled.TextInput`
  height: 35px;
  width: 90%;
  background-color: "opacity";
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);

  justify-content: center;
  padding-left: 5px;
`;

const InputText = styled.Text``;

export default ({ comment, setComments, addComment }) => {
  return (
    <CommentContainer>
      <CommentInput
        value={comment}
        onChangeText={(text) => setComments(text)}
        placeholder="댓글을 달아주세요"
      />
      <TouchableOpacity onPress={addComment}>
        <InputText>등록 </InputText>
      </TouchableOpacity>
    </CommentContainer>
  );
};

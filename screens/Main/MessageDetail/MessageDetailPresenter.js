import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { ScrollView, Text } from "react-native";
import { sendMessage } from "../../../redux/usersSlice";

const MessageContainer = styled.View`
  flex: 1;

  align-items: center;
`;
const MessageTextContainer = styled.View``;
const MessageText = styled.Text``;
const Touchable = styled.TouchableOpacity``;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;
const IconContainer = styled.View`
  margin-right: 10px;
  align-items: center;
`;
const Back = styled.Text`
  padding-top: 4px;
`;

const TextInputContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
const TextInput = styled.TextInput`
  height: 35px;
  width: 90%;
  background-color: white;
  /* box-shadow: 0px 1px rgba(200, 200, 200, 0.5); */
  border: 1px solid black
  border-radius:10
  justify-content: center;
  padding-left: 5px;
`;

export default ({
  token,
  postUser,
  conversationId,
  me,
  increasePage,
  messages,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [comment, setComments] = useState("");
  const onSubmit = (conversationId, comment, token) => {
    dispatch(sendMessage(conversationId, comment, token));
    setComments("");
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
      <ScrollView>
        <MessageContainer>
          {messages.map((message) => (
            <MessageTextContainer>
              <MessageText>
                {message.message}
                {message.user.username}{" "}
              </MessageText>
            </MessageTextContainer>
          ))}
        </MessageContainer>
      </ScrollView>
      <TextInputContainer>
        <TextInput
          placeholder="메시지를 입력하세요"
          value={comment}
          onChangeText={(text) => setComments(text)}
        />
        <Touchable onPress={() => onSubmit(conversationId, comment, token)}>
          <FontAwesome name="send" size={24} color="black" />
        </Touchable>
      </TextInputContainer>
    </>
  );
};

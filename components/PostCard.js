import React, { useState } from "react";
import { Image, Platform, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import PostPhoto from "./PostPhoto";
import colors from "../colors";
import { toggleLike } from "../redux/postsSlice";
import { toggleFollow, goConversation } from "../redux/usersSlice";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
`;
const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;
const Touchable = styled.TouchableOpacity``;
const FollwContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center
  margin-left: 10px;
  border: 1px solid black;
  padding: 2px 5px;
  border-radius: 5;
  background-color: #0095f6;
`;
const FollweText = styled.Text`
  color: white;
  font-size: 12px;
`;
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

const PostCard = ({
  id,
  user,
  photos,
  caption,
  location,
  isLiked,
  like_count,
  token,
  me,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goMessage = (token, user, me) => {
    dispatch(goConversation(user.id));
    navigation.navigate("MessageDetail", { token, user, me });
  };
  return (
    <Container>
      <Header>
        <Touchable>
          <Image
            style={{ height: 40, width: 40, borderRadius: 20 }}
            source={{ uri: user.avatar }}
          />
        </Touchable>
        <Touchable>
          <HeaderUserContainer>
            <Bold>{user.username}</Bold>
            <Location>{location}</Location>
          </HeaderUserContainer>
        </Touchable>
        <Touchable onPress={() => dispatch(toggleFollow(user))}>
          {user.is_follower ? (
            <>
              <AntDesign name="check" size={24} color="green" />
            </>
          ) : (
            <>
              <FollwContainer>
                <Ionicons name="add" size={12} color="white" />
                <FollweText>팔로우</FollweText>
              </FollwContainer>
            </>
          )}
        </Touchable>
      </Header>
      <PostPhoto photos={photos} />
      <InfoContainer>
        <IconsContainer>
          <Touchable onPress={() => dispatch(toggleLike(id))}>
            <IconContainer>
              <Ionicons
                size={24}
                color={isLiked ? colors.red : colors.black}
                name="md-heart"
              />
            </IconContainer>
          </Touchable>
          {user.id === me.id ? null : (
            <Touchable onPress={() => goMessage(token, user, me)}>
              <IconContainer>
                <FontAwesome name="comment" size={24} color="black" />
              </IconContainer>
            </Touchable>
          )}
        </IconsContainer>

        <Bold>{like_count === 0 ? "" : `${like_count}명이 좋아합니다`}</Bold>

        <Caption>
          <Bold>{user.username}</Bold> {caption}
        </Caption>
      </InfoContainer>
    </Container>
  );
};

export default PostCard;

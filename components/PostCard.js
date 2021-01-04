import React, { useState } from "react";
import { Image, Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import constants from "../constants";
import PostPhoto from "./PostPhoto";
import colors from "../colors";
import { toggleLike } from "../redux/postsSlice";

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
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
const CommentCount = styled.Text`
  opacity: 0.5;
  font-size: 13px;
`;

const PostCard = ({
  key,
  id,
  user,
  photos,
  name,
  postObj,
  caption,
  location,
  avatar,
  created,
  isLiked,
  like_count,
}) => {
  const dispatch = useDispatch();

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
          <Touchable>
            <IconContainer>
              <FontAwesome name="comment" size={24} color="black" />
            </IconContainer>
          </Touchable>
        </IconsContainer>

        <Bold>{like_count === 0 ? "" : `${like_count}명이 좋아합니다`}</Bold>

        <Caption>
          <Bold>{user.username}</Bold> {caption}
        </Caption>
        <Touchable>
          <CommentCount></CommentCount>
        </Touchable>
      </InfoContainer>
    </Container>
  );
};

// Post.propTypes = {
//   id: PropTypes.string.isRequired,
//   user: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     avatar: PropTypes.string,
//     username: PropTypes.string.isRequired,
//   }).isRequired,
//   files: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   likeCount: PropTypes.number.isRequired,
//   isLiked: PropTypes.bool.isRequired,
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       user: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         username: PropTypes.string.isRequired,
//       }).isRequired,
//     })
//   ).isRequired,
//   caption: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   createdAt: PropTypes.string.isRequired,
// };

export default PostCard;

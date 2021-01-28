import styled from "styled-components/native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import PostCard from "./PostCard";
import CommentPresenter from "../../../components/CommentPresenter";
import { addComment } from "../../../redux/postsSlice";
import { ActivityIndicator, Button, ScrollView } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
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
const Scroll = styled.ScrollView`
  width: 100%;
  padding-top: 30;
`;
const CommentCount = styled.Text`
  margin-left:10px
  margin-bottom:15px
  opacity: 0.7;
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);
  padding: 10px 20px;
`;

export default ({ token, me, postObj, loading }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [comment, setComments] = useState("");
  const onSubmit = (postId, comment, postObj, token) => {
    dispatch(addComment(postId, comment));
    setComments("");
    const avatar = post.user.avatar;
    navigation.navigate("CommentDetail", { post: postObj, token, avatar });
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

      <Container>
        {loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <Scroll>
            <>
              <PostCard
                key={postObj.id}
                id={postObj.id}
                user={postObj.user}
                avatar={postObj.user.avatar}
                photos={postObj.photos}
                name={postObj.name}
                postObj={postObj}
                caption={postObj.caption}
                location={postObj.location}
                created={postObj.created}
                isLiked={postObj.is_liked}
                like_count={
                  postObj.like_list ? postObj.like_list.count_users : 0
                }
                like_list={postObj.like_list ? postObj.like_list.user : []}
                token={token}
                me={me}
              />
              {postObj.comment_list === null ? (
                <CommentPresenter
                  comment={comment.value}
                  setComments={setComments}
                  addComment={() =>
                    onSubmit(postObj.id, comment, postObj, token)
                  }
                />
              ) : (
                <Touchable
                  onPress={() =>
                    navigation.navigate("CommentDetail", {
                      post: postObj,
                      token,
                      avatar: postObj.user.avatar,
                    })
                  }
                >
                  <CommentCount>
                    {postObj.comment_list.length}개의 댓글더보기...
                  </CommentCount>
                </Touchable>
              )}
            </>
          </Scroll>
        )}
      </Container>
    </>
  );
};

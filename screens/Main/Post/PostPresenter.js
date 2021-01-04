import React from "react";
import styled from "styled-components/native";
import PostCard from "../../../components/PostCard";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export default ({ posts, increasePage }) => {
  const navigation = useNavigation();
  console.log(posts);
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
              />
            ))}
          </ScrollView>
        </>
      )}
    </Container>
  );
};

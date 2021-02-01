import React from "react";
import styled from "styled-components/native";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProfilePostCard from "./ProfilePostCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../redux/usersSlice";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  width: 90%;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
const HeaderPhotoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeaderTextContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
const HeaderViewContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Touchable = styled.TouchableOpacity``;

const LargeText = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;
const Text = styled.Text``;
const EditProfileBtn = styled.TouchableOpacity`
  width: 90%;
  height: 35px;
  border: 1px solid grey;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;
const PostContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

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
const FollwContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center
  margin-left: 10px;
  border: 1px solid black;
  padding: 4px 10px;
  border-radius: 5;
  background-color: #0095f6;
`;

const FollweText = styled.Text`
  color: white;
  font-size: 12px;
`;
export default ({
  followees,
  followers,
  myPost,
  user,
  getPost,
  myPostLength,
  loadingMyPost,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    const confirmLogout = confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      dispatch(userLogOut());
    } else {
      return;
    }
  };
  return (
    <>
      {" "}
      <Touchable onPress={() => navigation.goBack()}>
        <IconsContainer>
          <IconContainer>
            <Ionicons name="arrow-back" size={24} color="black" />
          </IconContainer>
          <Back>뒤로가기</Back>
        </IconsContainer>
      </Touchable>
      <ScrollView>
        {loadingMyPost ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <>
            <Container>
              <HeaderContainer>
                <HeaderPhotoContainer>
                  <View>
                    <Image
                      style={{ height: 80, width: 80, borderRadius: 100 }}
                      source={{ uri: user.avatar }}
                    />
                    <Text>{user.username}</Text>
                    <Text>{user.bio}</Text>
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Touchable onPress={() => handleLogout()}>
                      <FollwContainer>
                        <FollweText>로그아웃</FollweText>
                      </FollwContainer>
                    </Touchable>
                  </View>
                </HeaderPhotoContainer>
                <HeaderViewContainer>
                  <LargeText>{myPostLength}</LargeText>
                  <Text>포스트</Text>
                </HeaderViewContainer>
                <HeaderTextContainer
                  onPress={() =>
                    navigation.navigate("FollowerList", { followees })
                  }
                >
                  <LargeText>{followees.length}</LargeText>
                  <Text>팔로워</Text>
                </HeaderTextContainer>
                <HeaderTextContainer
                  onPress={() =>
                    navigation.navigate("FolloweeList", { followers })
                  }
                >
                  <LargeText>{followers.length}</LargeText>
                  <Text>팔로잉</Text>
                </HeaderTextContainer>
              </HeaderContainer>
              <EditProfileBtn
                onPress={() => navigation.navigate("EditProfile")}
              >
                <BtnText>프로필 수정</BtnText>
              </EditProfileBtn>
            </Container>
            <PostContainer>
              {myPost.map((post) => (
                <ProfilePostCard
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
                  getPost={getPost}
                />
              ))}
            </PostContainer>
          </>
        )}
      </ScrollView>
    </>
  );
};

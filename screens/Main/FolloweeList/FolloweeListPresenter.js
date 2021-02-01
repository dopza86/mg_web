import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { toggleFollow } from "../../../redux/usersSlice";

const Container = styled.View`
  width: 100%;
  align-items: center;
`;
const Header = styled.View`
  width: 99%;
  padding: 15px;
  flex-direction: row;
  align-items: flex-start;
  box-shadow: 0px 1px rgba(200, 200, 200, 0.3);
`;
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
const Caption = styled.Text`
  margin: 5px 0px;
  font-size: 12px;
`;
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
const Text = styled.Text``;
const Image = styled.Image``;
const Touchable = styled.TouchableOpacity``;
export default ({ myfollowees }) => {
  console.log(myfollowees);
  const dispatch = useDispatch();
  return (
    <Container>
      {myfollowees.map((mf) => (
        <Header key={mf.id}>
          <UserTouchable>
            <Image
              style={{ height: 35, width: 35, borderRadius: 20 }}
              source={{ uri: mf.avatar }}
            />
            <HeaderUserContainer>
              <Bold>{mf.username}</Bold>
              <Caption>{mf.bio}</Caption>
            </HeaderUserContainer>
          </UserTouchable>
          <View style={{ marginLeft: 10 }}>
            <Touchable onPress={() => dispatch(toggleFollow(mf))}>
              {mf.is_follower ? (
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
          </View>
        </Header>
      ))}
    </Container>
  );
};

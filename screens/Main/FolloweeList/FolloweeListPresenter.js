import React from "react";
import styled from "styled-components/native";

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
const Text = styled.Text``;
const Image = styled.Image``;
export default ({ myfollowees }) => {
  console.log(myfollowees);
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
        </Header>
      ))}
    </Container>
  );
};

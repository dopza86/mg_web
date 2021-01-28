import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import styled from "styled-components/native";
import ProfilePostPhoto from "./ProfilePostPhoto";

const Container = styled.View`
  width: 33%;
  max-width: 250px;
  padding: 10px;
`;
const Caption = styled.Text`
  margin: 5px 0px;
  font-size: 12px;
`;
const InfoContainer = styled.TouchableOpacity`
  padding: 10px;
`;

const ProfilePostCard = ({ photos, caption, postObj }) => {
  const navigation = useNavigation();

  const onSubmit = () => {
    navigation.navigate("PostDetail", { postObj });
  };
  return (
    <>
      <Container>
        <ProfilePostPhoto photos={photos} />
        <InfoContainer onPress={() => onSubmit()}>
          <Caption>{caption}</Caption>
        </InfoContainer>
      </Container>
    </>
  );
};

export default ProfilePostCard;

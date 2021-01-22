import React from "react";
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
const InfoContainer = styled.View`
  padding: 10px;
`;

const ProfilePostCard = ({ photos, caption }) => {
  return (
    <>
      <Container>
        <ProfilePostPhoto photos={photos} />
        <InfoContainer>
          <Caption>{caption}</Caption>
        </InfoContainer>
      </Container>
    </>
  );
};

export default ProfilePostCard;

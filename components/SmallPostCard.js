import React from "react";
import styled from "styled-components/native";
import SmallPostPhoto from "./SmallPostPhoto";

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

const SmallPostCard = ({ photos, caption }) => {
  return (
    <>
      <Container>
        <SmallPostPhoto photos={photos} />
        <InfoContainer>
          <Caption>{caption}</Caption>
        </InfoContainer>
      </Container>
    </>
  );
};

export default SmallPostCard;

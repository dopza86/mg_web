import { BlurView } from "expo-blur";
import React from "react";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";

const LOGO_URL =
  "https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  margin-top: 50px;
  width: 100px;
  height: 100px;
`;

const BtnContainer = styled.View`
  margin-top: 40px;
`;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
    <Container>
      <Logo source={{ uri: LOGO_URL }} />
      <BtnContainer>
        <Btn onPress={goToSignUp} text={"가입하기"} accent={true} />
        <Btn onPress={goToSignIn} text={"접속하기"} />
      </BtnContainer>
    </Container>
  );
};

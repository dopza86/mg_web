import React from "react";
import styled from "styled-components/native";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../components/Auth/Input";
import Btn from "../../../components/Auth/Btn";
import KakaoBtn from "../../../components/Auth/KakaoBtn";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <Container>
      <InputContainer>
        <Input
          value={username}
          placeholder="아이디"
          onChangeText={(text) => setUsername(text)}
          stateFn={setUsername}
        />
        <Input
          value={password}
          placeholder="비밀번호"
          onChangeText={(text) => setPassword(text)}
          stateFn={setPassword}
          isPassword={true}
        />
      </InputContainer>
      <Btn text={"접속하기"} accent={true} onPress={handleSubmit} />
      <KakaoBtn text={" 카카오 로그인"} accent={true} />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </Container>
  );
};

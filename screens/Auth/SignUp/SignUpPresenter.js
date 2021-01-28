import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import styled from "styled-components/native";
import api from "../../../api";
import Btn from "../../../components/Auth/Btn";
import KakaoBtn from "../../../components/Auth/KakaoBtn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

import utils from "../../../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  username,
  setUsername,
  password1,
  setPassword1,
  loading,
  handleSubmit,
  password2,
  setPassword2,
  email,
  setEmail,
}) => {
  return (
    <Container>
      <InputContainer>
        <Input value={username} placeholder="아이디" stateFn={setUsername} />
        <Input value={email} placeholder="이메일" stateFn={setEmail} />
        <Input
          value={password1}
          placeholder="비밀번호"
          stateFn={setPassword1}
          isPassword={true}
        />
        <Input
          value={password2}
          placeholder="비밀번호 확인"
          stateFn={setPassword2}
          isPassword={true}
        />
      </InputContainer>
      <Btn loading={loading} text={"가입하기"} accent onPress={handleSubmit} />
      {/* <KakaoBtn text={" 카카오로 시작"} accent={true} /> */}
    </Container>
  );
};

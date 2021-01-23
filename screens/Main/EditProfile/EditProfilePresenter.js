import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import api from "../../../api";
import colors from "../../../colors";
import { useDispatch } from "react-redux";
import { changeAvatar, editUserInfo } from "../../../redux/usersSlice";
import utils from "../../../utils";

const Container = styled.View``;
const Text = styled.Text``;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;
const IconContainer = styled.View`
  margin-right: 10px;
  align-items: center;
`;
const Touchable = styled.TouchableOpacity``;
const Back = styled.Text`
  padding-top: 4px;
`;

const InputContainer = styled.View`
  margin-top: 5px;

  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Input = styled.TextInput`
  height: 35px;
  width: 90%;
  background-color: "opacity";
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);
  margin-bottom: 20px;
  justify-content: center;
  padding-left: 5px;
`;
const ProfileImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const ProfileText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.facebookblue};
`;
const Button = styled.TouchableOpacity``;
const InputText = styled.Text``;
const ConfirmBtnContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const ConfirmButton = styled.TouchableOpacity`
  width: 40%;
  height: 35px;
  border: 1px solid grey;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const ConfirmBtnText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export default ({ token, user }) => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const { uri } = result;
    const form = {
      username: user.username,
      password: "password",
      email: user.email,
      bio: user.bio,
      avatar: uri,
    };

    const { status, data } = await api.updateUser(user.id, form, token);
    if (status === 200) {
      dispatch(changeAvatar(data));
    } else {
      alert("업데이트할수 업습니다");
    }

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const handleSubmit = async () => {
    const form = {
      username: user.username,
      password: "password",
      email: email,
      bio: bio,
    };
    dispatch(editUserInfo(user.id, form, token));
  };

  const isFormValid = () => {
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      alert("모든 항목을 작성 해주세요");
      return false;
    } else if (newPassword !== confirmPassword) {
      alert("변경하실 비밀번호가 서로 일치하지 않습니다");
      return false;
    } else if (
      !utils.validPassword(newPassword) ||
      !utils.validPassword(confirmPassword)
    ) {
      alert("비밀번호는8-15자, 숫자/문자/특수문자를 모두 포함해야 합니다");
      return false;
    } else {
      return true;
    }
  };
  const handlePasswordSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    const form = {
      old_password: oldPassword,
      new_password1: newPassword,
      new_password2: confirmPassword,
    };
    try {
      const { status } = await api.updatePassword(form, token);
      if (status === 200) {
        alert("비밀번호가 변경되었습니다");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (e) {
      alert("현재 비밀번호를 확인해주세요");
      console.warn(e);
    }
  };
  return (
    <>
      <Touchable onPress={() => navigation.goBack()}>
        <IconsContainer>
          <IconContainer>
            <Ionicons name="arrow-back" size={24} color="black" />
          </IconContainer>
          <Back>뒤로가기</Back>
        </IconsContainer>
      </Touchable>
      <Container>
        <ProfileImageContainer>
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
              marginBottom: 10,
            }}
            source={{ uri: user.avatar }}
          />
          <Button onPress={pickImage}>
            <ProfileText>프로필 이미지 변경</ProfileText>
          </Button>
        </ProfileImageContainer>
        <InputContainer>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="이메일"
          />

          <Input
            value={bio}
            onChangeText={(text) => setBio(text)}
            placeholder="소개"
            multiline={true}
          />
        </InputContainer>
      </Container>
      <ConfirmBtnContainer>
        <ConfirmButton onPress={() => handleSubmit()}>
          <ConfirmBtnText>확인</ConfirmBtnText>
        </ConfirmButton>
      </ConfirmBtnContainer>
      <InputContainer>
        <Input
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
          placeholder="현재 비밀번호"
          secureTextEntry={true}
        />

        <Input
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          placeholder="새 비밀번호"
          secureTextEntry={true}
        />
        <Input
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="새 비밀번호 확인"
          secureTextEntry={true}
        />
      </InputContainer>
      <ConfirmBtnContainer>
        <ConfirmButton onPress={() => handlePasswordSubmit()}>
          <ConfirmBtnText>비밀번호 변경</ConfirmBtnText>
        </ConfirmButton>
      </ConfirmBtnContainer>
    </>
  );
};

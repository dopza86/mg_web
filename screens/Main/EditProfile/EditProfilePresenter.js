import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import api from "../../../api";

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

const CommentContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const CommentInput = styled.TextInput`
  height: 35px;
  width: 90%;
  background-color: "opacity";
  box-shadow: 0px 1px rgba(200, 200, 200, 0.5);

  justify-content: center;
  padding-left: 5px;
`;

const InputText = styled.Text``;

export default ({ token }) => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [comment, setComments] = useState("");
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
      username: "dopza86",
      password: "qwer1357",
      bio: "sex",
      avatar: uri,
    };

    const data = await api.update_user(1, form, token);

    if (!result.cancelled) {
      setImage(result.uri);
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
        <Text>프로필 편집</Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <CommentContainer>
          <CommentInput
            value={comment}
            onChangeText={(text) => setComments(text)}
            placeholder="이메일"
            multiline={true}
          />
          <Touchable>
            <InputText>등록 </InputText>
          </Touchable>
          <CommentInput
            value={comment}
            onChangeText={(text) => setComments(text)}
            placeholder="소개"
            multiline={true}
          />
          <Touchable>
            <InputText>등록 </InputText>
          </Touchable>
        </CommentContainer>
      </Container>
    </>
  );
};

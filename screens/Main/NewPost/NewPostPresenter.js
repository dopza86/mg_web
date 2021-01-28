import React, { useState, useEffect } from "react";
import { Image, View, Platform, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const Touchable = styled.TouchableOpacity``;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;
const IconContainer = styled.View`
  margin-right: 10px;
  align-items: center;
`;
const Back = styled.Text`
  padding-top: 4px;
`;
const Container = styled.View``;
const ImageSelectContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const ImageBox = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
const ImageContainer = styled.View`
  width: 33%;
  max-width: 250px;
  padding: 10px;
`;
const Button = styled.TouchableOpacity`
  width: 40%;
  height: 35px;
  border: 1px solid grey;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const ImageSelectText = styled.Text`
  font-size: 15px;
  font-weight: 500;
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
export default function ImagePickerExample({
  token,
  pickImage,
  image,
  images,
  tags,
  caption,
  location,
  setTags,
  setCaption,
  setLocation,
  CleanPhoto,
  writePost,
  navigation,
}) {
  const handleSubmit = async (tags, caption, location, navigation) => {
    if (caption === "" || location === "") {
      alert("설명과 위치를 입력해주세요");
    } else {
      const editConfirm = confirm("등록 하시겠습니까?");
      if (editConfirm) {
        setTags("");
        setCaption("");
        setLocation("");
        await writePost(tags, caption, location);

        navigation.navigate("Profile");
      } else {
        return;
      }
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
      <ScrollView>
        <InputContainer>
          <Input
            value={tags}
            onChangeText={(text) => setTags(text)}
            placeholder="태그, 쉼표(,)로 구분해주세요"
          />

          <Input
            value={caption}
            onChangeText={(text) => setCaption(text)}
            placeholder="설명"
            multiline={true}
          />
          <Input
            value={location}
            onChangeText={(text) => setLocation(text)}
            placeholder="위치"
          />
        </InputContainer>
        <Container>
          <ImageSelectContainer>
            <Button onPress={pickImage}>
              <ImageSelectText>사진을 선택하세요</ImageSelectText>
            </Button>
            <ImageBox>
              {images.map((i) => (
                <ImageContainer>
                  <Image
                    source={{ uri: i }}
                    style={{ width: 200, height: 200 }}
                  />
                </ImageContainer>
              ))}
            </ImageBox>
            <Button
              onPress={() => handleSubmit(tags, caption, location, navigation)}
            >
              <ImageSelectText>등록</ImageSelectText>
            </Button>
          </ImageSelectContainer>
        </Container>
      </ScrollView>
    </>
  );
}

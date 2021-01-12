import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Modal from "modal-enhanced-react-native-web";

import { Dimensions, TouchableOpacity, Switch } from "react-native";

import colors from "../../../colors";
import PostCard from "../../../components/PostCard";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  padding: 0px;
`;

const SearchContainer = styled.View`
  margin-top: 5px;

  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 90%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const SearchBtnContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const SearchBtn = styled.TouchableOpacity`
  width: ${width / 2}px;
  max-width:300px
  background-color: #0095f6;
  padding: 10px;
  margin: 10px 30px;
  border-radius: 10px;
  align-items: center;
`;
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
const SearchText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const SearchText2 = styled.Text`
  color: Black;
  font-weight: 600;
  font-size: 16px;
`;

const Results = styled.ScrollView`
  margin-top: 25px;
`;

const ModalContainer = styled.View`
  height: 40px;
  width: 90%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
  margin-top: 15px;
`;
const ModalContent = styled.View`
  background-color: white;
  padding: 22px;

  border-radius: 4px;

  border-color: rgba(0, 0, 0, 0.1);
`;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ModalButton = styled.View`
  background-color: #0095f6;
  padding: 10px 24px;
  margin: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
`;

const ModalButton2 = styled.View`
  background-color: transparent;
  padding: 10px 24px;
  margin: 16px;
  justify-content: center;
  align-items: center;
  border:1px solid black
  border-radius: 4px;
  
`;
const ModalTextContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
const ModalText = styled.Text``;
const SwitchContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 30px;
`;

const SwitchTextContainer = styled.View`
  margin-left: 35px;
`;
const SwitchText = styled.Text`
  font-size: 15px;
`;

export default () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconsContainer>
          <IconContainer>
            <Ionicons name="arrow-back" size={24} color="black" />
          </IconContainer>
          <Back>뒤로가기</Back>
        </IconsContainer>
      </TouchableOpacity>

      <Container>
        <SearchContainer>
          <SearchBar autoFocus={true} placeholder="검색" />
          <ModalContainer>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <ModalTextContainer>
                <ModalText>Hello</ModalText>
                <AntDesign
                  name="caretdown"
                  size={16}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </ModalTextContainer>
            </TouchableOpacity>
          </ModalContainer>
        </SearchContainer>
        <Modal isVisible={modalVisible}>
          <ModalContent>
            <SwitchContainer>
              <SwitchTextContainer>
                <SwitchText>작성자</SwitchText>
              </SwitchTextContainer>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SwitchContainer>

            <SwitchContainer>
              <SwitchTextContainer>
                <SwitchText>해시태그</SwitchText>
              </SwitchTextContainer>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SwitchContainer>
            <SwitchContainer>
              <SwitchTextContainer>
                <SwitchText>위치</SwitchText>
              </SwitchTextContainer>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SwitchContainer>
            <SwitchContainer>
              <SwitchTextContainer>
                <SwitchText>내용</SwitchText>
              </SwitchTextContainer>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SwitchContainer>
            <ModalButtonContainer>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <ModalButton>
                  <SearchText>취소</SearchText>
                </ModalButton>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <ModalButton>
                  <SearchText>확인</SearchText>
                </ModalButton>
              </TouchableOpacity>
            </ModalButtonContainer>
          </ModalContent>
        </Modal>
      </Container>

      <SearchBtnContainer>
        <SearchBtn>
          <SearchText>검색</SearchText>
        </SearchBtn>
      </SearchBtnContainer>

      <Results></Results>
    </>
  );
};

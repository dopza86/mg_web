import React, { useState, Component } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Modal from "modal-enhanced-react-native-web";

import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  CheckBox,
  StyleSheet,
} from "react-native";

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

const PickerContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Picker = styled.Picker`
  border-radius: 7px;
  padding-left: 10px;
  height: 40px;
  width: 80%;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

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
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
`;
const ModalButton = styled.View`
  background-color: lightblue;
  padding: 12px;
  margin: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
`;
const ModalTextContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
const ModalText = styled.Text``;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default () => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("java");
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
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <ModalButton>Hello</ModalButton>
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
            </View>
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

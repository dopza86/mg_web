import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Modal from "modal-enhanced-react-native-web";

import {
  Dimensions,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import SmallPostCard from "../../../components/SmallPostCard";

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
  padding: 20px;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ModalButton = styled.View`
  background-color: #0095f6;
  padding: 10px 50px;
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
const SwitchBox = styled.View`
  margin-top: 30px;
  margin-right: 35px;
  justify-content: center;
`;
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

const Results = styled.View`
  margin-top: 25px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ResultsText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
`;
const Scroll = styled.ScrollView``;

export default ({
  userEnabled,
  tagEnabled,
  locationEnabled,
  captionEnabled,
  userSwitch,
  tagSwitch,
  locationSwitch,
  captionSwitch,
  searchResults,
  setSearchValue,
  modalText,
  triggerSearch,
  loading,
  onScroll,
}) => {
  const navigation = useNavigation();
  console.log(searchResults[0]);
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
      <ScrollView onScroll={onScroll}>
        <Container>
          <SearchContainer>
            <SearchBar
              autoFocus={true}
              placeholder="검색"
              onChangeText={(text) => setSearchValue(text)}
            />
            <ModalContainer>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <ModalTextContainer>
                  <ModalText>{modalText}</ModalText>
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
              <SwitchBox>
                <SwitchContainer>
                  <SwitchTextContainer>
                    <SwitchText>작성자</SwitchText>
                  </SwitchTextContainer>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={userEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={userSwitch}
                    value={userEnabled}
                  />
                </SwitchContainer>

                <SwitchContainer>
                  <SwitchTextContainer>
                    <SwitchText>해시태그</SwitchText>
                  </SwitchTextContainer>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={tagEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={tagSwitch}
                    value={tagEnabled}
                  />
                </SwitchContainer>
                <SwitchContainer>
                  <SwitchTextContainer>
                    <SwitchText>위치</SwitchText>
                  </SwitchTextContainer>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={locationEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={locationSwitch}
                    value={locationEnabled}
                  />
                </SwitchContainer>
                <SwitchContainer>
                  <SwitchTextContainer>
                    <SwitchText>내용</SwitchText>
                  </SwitchTextContainer>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={captionEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={captionSwitch}
                    value={captionEnabled}
                  />
                </SwitchContainer>
              </SwitchBox>
              <ModalButtonContainer>
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
          <SearchBtn onPress={triggerSearch}>
            <SearchText>검색</SearchText>
          </SearchBtn>
        </SearchBtnContainer>
        {searchResults[0] === undefined ? null : (
          <ResultsText>
            {searchResults[0].posts_length}개의 결과가 있습니다
          </ResultsText>
        )}
        {loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <Results>
            {searchResults.map((post) => (
              <SmallPostCard
                key={post.id}
                id={post.id}
                user={post.user}
                avatar={post.user.avatar}
                photos={post.photos}
                name={post.name}
                postObj={post}
                caption={post.caption}
                location={post.location}
                created={post.created}
                isLiked={post.is_liked}
                like_count={post.like_list ? post.like_list.count_users : 0}
              />
            ))}
          </Results>
        )}
        {/* <Results>
        {searchResults.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            user={post.user}
            avatar={post.user.avatar}
            photos={post.photos}
            name={post.name}
            postObj={post}
            caption={post.caption}
            location={post.location}
            created={post.created}
            isLiked={post.is_liked}
            like_count={post.like_list ? post.like_list.count_users : 0}
          />
        ))}
      </Results> */}
      </ScrollView>
    </>
  );
};

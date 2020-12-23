import React from "react";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  margin-bottom:25px;
  border: 1px solid ${(props) => (props.accent ? "transparent" : colors.black)};
  
  padding:12.5px 0px
  align-items: center;
  width: ${width / 1.5}px;
  background-color: ${(props) =>
    props.accent ? colors.kakaoyellow : "transparent"};
  max-width: 350px;
`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.accent ? colors.kakaobrown : colors.black)};
`;

const KakaoBtn = ({ loading = false, onPress, text, accent = false }) => (
  <TouchableOpacity onPress={loading ? null : onPress}>
    <Button accent={accent}>
      {loading ? (
        <ActivityIndicator color={accent ? "white" : "black"} />
      ) : (
        <Text accent={accent}>
          <Entypo name="message" size={16} />
          {text}
        </Text>
      )}
    </Button>
  </TouchableOpacity>
);

KakaoBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

export default KakaoBtn;

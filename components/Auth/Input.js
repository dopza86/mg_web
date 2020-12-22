import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const { width } = Dimensions.get("screen");
const Container = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;

  margin-bottom: 10px;
  font-weight: 500;
  max-width: 350px;
`;
const Input = ({ value, placeholder, stateFn, isPassword = false }) => (
  <Container
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    onChangeText={(text) => stateFn(text)}
  />
);
Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};
export default Input;

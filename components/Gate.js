import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/usersSlice";
import Auth from "../navigation/Auth";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>로그아웃 하기</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};
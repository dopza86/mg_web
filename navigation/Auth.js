import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import Welcome from "../screens/Auth/Welcome";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

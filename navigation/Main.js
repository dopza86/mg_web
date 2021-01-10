import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../colors";

import Post from "../screens/Main/Post";
import Message from "../screens/Main/Message";
import Search from "../screens/Main/Search";
import Profile from "../screens/Main/Profile";
import CommentDetail from "../screens/Main/CommentDetail";
import CommentEdit from "../screens/Main/CommentEdit";

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 10,
      },
      labelStyle: {
        fontWeight: "600",
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === "포스트") {
          return (
            <Foundation
              name="home"
              size={24}
              color={focused ? colors.red : "grey"}
            />
          );
        } else if (route.name === "메시지") {
          return (
            <Feather
              name="message-square"
              size={24}
              color={focused ? colors.red : "grey"}
            />
          );
        } else if (route.name === "검색") {
          return (
            <FontAwesome
              name="search"
              size={24}
              color={focused ? colors.red : "grey"}
            />
          );
        } else if (route.name === "프로필") {
          return (
            <Ionicons
              name="md-person"
              size={24}
              color={focused ? colors.red : "grey"}
            />
          );
        }
      },
    })}
  >
    <TabsNavigator.Screen name="포스트" component={Post} />
    <TabsNavigator.Screen name="메시지" component={Message} />
    <TabsNavigator.Screen name="검색" component={Search} />
    <TabsNavigator.Screen name="프로필" component={Profile} />
  </TabsNavigator.Navigator>
);

const MainNavigator = createStackNavigator();
export default () => (
  <MainNavigator.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />

    <MainNavigator.Screen
      name="CommentDetail"
      component={CommentDetail}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen
      name="CommentEdit"
      component={CommentEdit}
      options={{ headerShown: false }}
    />
  </MainNavigator.Navigator>
);

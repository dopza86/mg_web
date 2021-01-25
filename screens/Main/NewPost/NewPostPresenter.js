import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import api from "../../../api";

export default function ImagePickerExample({
  token,
  pickImage,
  image,
  images,
}) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image &&
          images.map((i) => (
            <Image source={{ uri: i }} style={{ width: 200, height: 200 }} />
          ))}
      </View>
    </>
  );
}

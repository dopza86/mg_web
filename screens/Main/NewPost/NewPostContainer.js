import React, { useState, useEffect } from "react";
import NewPostPresenter from "./NewPostPresenter";
import * as ImagePicker from "expo-image-picker";
import api from "../../../api";
import { Button, Image, View, Platform } from "react-native";

export default ({ token, writePost, writePhoto }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    const { selected } = result;

    const uri = selected.map((s) => s.uri);
    writePost(uri);
    if (!result.cancelled) {
      setImage(uri[0]);
    }
    // var i;
    // for (i = 0; i < uri.length; i++) {
    //   writePost(uri[i]);
    //   if (!result.cancelled) {
    //     setImage(uri[i]);
    //   }
    // }
  };

  console.log(writePhoto);
  return (
    <NewPostPresenter
      token={token}
      pickImage={pickImage}
      image={image}
      images={writePhoto}
    />
  );
};

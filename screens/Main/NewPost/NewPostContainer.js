import React, { useState, useEffect } from "react";
import NewPostPresenter from "./NewPostPresenter";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export default ({
  token,
  writePost,
  addPhoto,
  writePhoto,
  CleanPhoto,
  navigation,
}) => {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
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
  useEffect(() => {
    CleanPhoto();
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

    if (uri.length > 9) {
      alert("사진은 9장까지 등록가능합니다");
    } else {
      writePhoto(uri);
    }

    // var i;
    // for (i = 0; i < uri.length; i++) {
    //   writePost(uri[i]);
    //   if (!result.cancelled) {
    //     setImage(uri[i]);
    //   }
    // }
  };

  return (
    <NewPostPresenter
      token={token}
      pickImage={pickImage}
      image={image}
      images={addPhoto}
      tags={tags}
      caption={caption}
      location={location}
      setTags={setTags}
      setCaption={setCaption}
      setLocation={setLocation}
      CleanPhoto={CleanPhoto}
      writePost={writePost}
      navigation={navigation}
    />
  );
};

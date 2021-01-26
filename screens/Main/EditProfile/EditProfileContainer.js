import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import EditProfilePresenter from "./EditProfilePresenter";

export default ({ token, user, getMe, myAvatar, myInfo }) => {
  useEffect(() => {
    getMe();
  }, []);
  useEffect(() => {
    getMe();
  }, [myAvatar]);
  useEffect(() => {
    getMe();
  }, [myInfo]);

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
    // const form = { file: selected, post: 1 };
    const uri = selected.map((s) => s.uri);
    var i;
    for (i = 0; i < uri.length; i++) {
      var form = { file: uri[i], post: 1 };
      var data = await api.updatePhotos(form, token);
      if (!result.cancelled) {
        setImage(uri[i]);
      }
    }
  };

  return <EditProfilePresenter token={token} user={user} />;
};

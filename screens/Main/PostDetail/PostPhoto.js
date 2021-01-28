import React from "react";
import styled from "styled-components/native";
import Pt from "prop-types";
import { Image } from "react-native";

import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const PhotosContainer = styled.View`
  width: 100%;
  height: ${height / 2.5};
`;

const SlideImage = styled.Image`
  height: ${height / 2.5};
`;

const PostPhoto = ({ photos }) => {
  return (
    <PhotosContainer>
      {photos.length === 0 ? (
        <SlideImage source={require("../../../web/loginBG.jpg")} />
      ) : (
        <Swiper
          controlsProps={{
            PrevComponent: () => null,
            NextComponent: () => null,
          }}
        >
          {photos.map((photo) => (
            <SlideImage
              key={photo.id}
              source={{
                uri: photo.file,
              }}
            />
          ))}
        </Swiper>
      )}
    </PhotosContainer>
  );
};

PostPhoto.propTypes = {
  photos: Pt.arrayOf(
    Pt.shape({
      file: Pt.string,
    })
  ),
};

export default PostPhoto;

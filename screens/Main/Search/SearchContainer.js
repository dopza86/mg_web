import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../../api";
import { searchPost } from "../../../redux/postsSlice";
import SearchPresenter from "./SearchPresenter";

export default ({
  token,
  filtered,
  likes,
  followers,
  clearFilterPost,
  loading,
}) => {
  const dispatch = useDispatch();
  const [userEnabled, setUserEnabled] = useState(true);
  const [tagEnabled, setTagEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [captionEnabled, setCaptionEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState();
  const [tag, setTag] = useState();
  const [location, setLocation] = useState();
  const [caption, setCaption] = useState();
  const [searchResults, setSearchResults] = useState();
  const [modalText, setModalText] = useState("작성자");
  // const [loading, setLoading] = useState(false);
  const userSwitch = () => {
    setUserEnabled(true);
    setTagEnabled(false);
    setLocationEnabled(false);
    setCaptionEnabled(false);
    setLocation("");
    setCaption("");
    setTag("");
    setModalText("작성자");
  };
  const tagSwitch = () => {
    setUserEnabled(false);
    setTagEnabled(true);
    setLocationEnabled(false);
    setCaptionEnabled(false);
    setUser("");
    setLocation("");
    setCaption("");
    setModalText("해시태그");
  };
  const locationSwitch = () => {
    setUserEnabled(false);
    setTagEnabled(false);
    setLocationEnabled(true);
    setCaptionEnabled(false);
    setUser("");
    setTag("");
    setCaption("");
    setModalText("위치");
  };
  const captionSwitch = () => {
    setUserEnabled(false);
    setTagEnabled(false);
    setLocationEnabled(false);
    setCaptionEnabled(true);
    setUser("");
    setTag("");
    setLocation("");
    setModalText("내용");
  };

  const triggerSearch = async () => {
    if (userEnabled === true) {
      const form = {
        ...(searchValue && { user: searchValue }),
      };

      dispatch(searchPost(form, token));
    }
    if (locationEnabled === true) {
      const form = {
        ...(searchValue && { location: searchValue }),
      };

      dispatch(searchPost(form, token));
    }

    if (tagEnabled === true) {
      const form = {
        ...(searchValue && { tags: searchValue }),
      };

      dispatch(searchPost(form, token));
    }
    if (captionEnabled === true) {
      const form = {
        ...(searchValue && { caption: searchValue }),
      };

      dispatch(searchPost(form, token));
    }
  };

  console.log(filtered);
  useEffect(clearFilterPost, []);
  return (
    <SearchPresenter
      userEnabled={userEnabled}
      tagEnabled={tagEnabled}
      locationEnabled={locationEnabled}
      captionEnabled={captionEnabled}
      userSwitch={userSwitch}
      tagSwitch={tagSwitch}
      locationSwitch={locationSwitch}
      captionSwitch={captionSwitch}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      modalText={modalText}
      triggerSearch={triggerSearch}
      searchResults={filtered}
      loading={loading}
    />
  );
};

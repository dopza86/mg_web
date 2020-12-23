import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { userLogin, me } from "../../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(params?.username || "dopza86");
  const [password, setPassword] = useState(params?.password || "12");

  const isFormValid = () => {
    if (username === "" || password === "") {
      toast.error("아이디와 비밀번호를 입력해주세요");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username,
        password,
      })
    );
  };

  return (
    <SignInPresenter
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

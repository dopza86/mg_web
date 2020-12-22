import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SignInPresenter from "./SignInPresenter";
import { toast } from "react-toastify";

export default () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

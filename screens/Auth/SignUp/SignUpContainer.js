import React, { useState } from "react";

import api from "../../../api";
import SignUpPresenter from "./SignUpPresenter";

export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      password === ""
    ) {
      alert("모든 항목을 작성 해주세요");
      return false;
    }

    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        username,
        password,
      });

      if (status === 201) {
        alert("가입을 축하드립니다");
        navigate("SignIn", { username, password });
      }
    } catch (e) {
      console.warn(e);
      alert(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SignUpPresenter
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

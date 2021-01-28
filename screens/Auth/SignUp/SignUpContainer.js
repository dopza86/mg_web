import React, { useState } from "react";

import api from "../../../api";
import SignUpPresenter from "./SignUpPresenter";

export default ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      username === "" ||
      email === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      alert("모든 항목을 작성 해주세요");
      return false;
    }

    return true;
  };
  const handleSubmit = async () => {
    // if (!isFormValid()) {
    //   return;
    // }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        username,
        email,
        password1,
        password2,
      });

      if (status === 201) {
        alert("가입을 축하드립니다");
        navigate("SignIn", { username, password1 });
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
      username={username}
      setUsername={setUsername}
      password1={password1}
      setPassword1={setPassword1}
      loading={loading}
      handleSubmit={handleSubmit}
      password2={password2}
      setPassword2={setPassword2}
      email={email}
      setEmail={setEmail}
    />
  );
};

import axios from "axios";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://73cafa20f382.ngrok.io/api/v1";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/rest-auth/login/", form),
  isMe: (pk) => callApi("get", `/users/${pk}`, pk),
  myFollow: (form, token) =>
    callApi("get", "/follow_relation/my_follow/", null, token, form),
  posts: (page = 1, token) =>
    callApi("get", `/posts/?page=${page}`, null, token),
};

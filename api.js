import axios from "axios";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://127.0.0.1:8000/api/v1";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  // login: (form) => callApi("post", "/users/login/", form),
  login: (form) => callApi("post", "/rest-auth/login/", form),
  isMe: (pk) => callApi("get", `/users/${pk}`, pk),
  myFollow: (form, token) =>
    callApi("get", "/follow_relation/my_follow/", form, token),
  posts: (page = 1, token) =>
    callApi("get", `/posts/?page=${page}`, null, token),
  handleLike: (postId, userId, token) =>
    callApi(
      "get",
      `/likes/handle_like/?post_pk=${postId}&user_pk=${userId}`,
      null,
      token
    ),
  seeComment: (postId, commentsPage = 1) =>
    callApi(
      "get",
      `/comments/get_comment/?post_pk=${postId}&page=${commentsPage}`
    ),

  goComment: (postId, form, token) =>
    callApi("post", `/comments/go_comment/?post_pk=${postId}`, form, token),
  editComment: (commetnId, form, token) =>
    callApi("put", `/comments/${commetnId}`, form, token),

  deleteComment: (commetnId, token) =>
    callApi("delete", `/comments/${commetnId}`, null, token),
};

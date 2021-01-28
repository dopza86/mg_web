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
  createAccount: (form) => callApi("post", "/rest-auth/registration/", form),
  // login: (form) => callApi("post", "/users/login/", form),
  login: (form) => callApi("post", "/rest-auth/login/", form),
  getUser: (pk) => callApi("get", `/users/${pk}`, pk),
  follow: (followerId, token) =>
    callApi(
      "get",
      `/follow_relation/follow/?follow_pk=${followerId}`,
      null,
      token
    ),

  myFollowee: (myPk, token) =>
    callApi("get", `/follow_relation/my_followee/?pk=${myPk}`, null, token),
  myFollower: (myPk, token) =>
    callApi("get", `/follow_relation/my_follower/?pk=${myPk}`, null, token),
  posts: (page = 1, token) =>
    callApi("get", `/posts/post/?page=${page}`, null, token),
  post: (postId) => callApi("get", `/posts/post/${postId}`),
  search: (form, token) => callApi("post", "/posts/post/search/", form, token),
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
  editComment: (commnetId, form, token) =>
    callApi("put", `/comments/${commnetId}/`, form, token),

  deleteComment: (commetnId, token) =>
    callApi("delete", `/comments/${commetnId}`, null, token),
  goConversation: (userOneId, userTwoId, token) =>
    callApi(
      "get",
      `/conversations/conversation/go_conversation/?a_pk=${userOneId}&b_pk=${userTwoId}`,
      null,
      token
    ),
  sendMessage: (conversationId, form, token) =>
    callApi(
      "post",
      `/conversations/message/send_messages/?pk=${conversationId}`,
      form,
      token
    ),
  getMessage: (conversationId, token, page = 1) =>
    callApi(
      "get",
      `/conversations/message/get_messages/?pk=${conversationId}&page=${page}`,
      null,
      token
    ),
  myPost: (pk) =>
    callApi("get", `/posts/post/my_post/?user_pk=${pk}`, null, null),
  updateUser: (userId, form, token) =>
    callApi("put", `/users/${userId}/update_user/`, form, token),
  updatePassword: (form, token) =>
    callApi("post", `/rest-auth/password/change/`, form, token),
  updatePhotos: (form, token) => callApi("post", `/posts/photo/`, form, token),
  updatePost: (form, token) => callApi("post", `/posts/post/`, form, token),
};

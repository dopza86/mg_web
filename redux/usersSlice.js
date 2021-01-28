import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: [],
    followers: [],
    followees: [],
    conversations: [],
    messages: [],
    myPost: [],
    userPost: [],
    myAvatar: [],
    myInfo: [],
    page: 1,
    loading: false,
    loadingMyPost: true,
    loadingUserPost: true,
  },

  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.pk = action.payload.pk;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
    me(state, action) {
      state.user = action.payload.user;
    },
    setMyAvatar(state, action) {
      const { payload } = action;
      state.myAvatar = payload;
    },
    setMyInfo(state, action) {
      const { payload } = action;
      state.myInfo = payload;
    },
    setFollow(state, action) {
      const {
        payload: { data },
      } = action;

      const follower = state.followers.find(
        (follower) => follower.id === data.id
      );

      if (follower === undefined || follower) {
        if (data.is_follower === false) {
          state.followers = [data, ...state.followers];
          const follower = state.followers.find(
            (follower) => follower.id === data.id
          );
          follower.is_follower = true;
          alert("팔로우!");
        } else if (data.is_follower === true) {
          state.followers = [data, ...state.followers];
          const follower = state.followers.find(
            (follower) => follower.id === data.id
          );
          follower.is_follower = false;
          state.followers = state.followers.filter(
            (follower) => follower.id !== data.id
          );
          alert("언팔로우!");
        }
      }
    },
    setFollowee(state, action) {
      const { payload } = action;

      state.followees = payload;
    },
    setFollower(state, action) {
      const { payload } = action;
      state.followers = payload;
    },
    setConversations(state, action) {
      const { payload } = action;
      state.conversations = payload;
      payload;
    },

    setConversation(state, action) {
      const { payload } = action;
      const message = payload;
      state.conversations.id = payload.conversation;

      state.conversations.messages = [message, ...state.conversations.messages];
    },
    increasePage(state, action) {
      state.page += 1;
    },
    setMessage(state, action) {
      const {
        payload: { data, page },
      } = action;

      if (page === 1) {
        state.messages = data;
        state.page = 1;
      } else {
        state.messages = [...state.messages, ...data];
      }
    },
    setMyPost(state, action) {
      const { payload } = action;

      state.myPost = payload;
      state.loadingMyPost = false;
    },
    setUserPost(state, action) {
      const { payload } = action;

      state.userPost = payload;
      state.loadingUserPost = false;
    },
    setLoadingUserPostTrue(state) {
      state.loadingUserPost = true;
    },
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
    setLoadingMyPostTrue(state) {
      state.loading = true;
    },
    setLoadingMyPostFalse(state) {
      state.loading = false;
    },
  },
});

export const {
  logIn,
  logOut,
  me,
  setFollow,
  setConversations,
  setConversation,
  setMessage,
  increasePage,
  setFollowee,
  setFollower,
  setMyPost,
  setLoadingTrue,
  setLoadingFalse,
  setMyAvatar,
  setMyInfo,
  setLoadingMyPostTrue,
  setLoadingMyPostFalse,
  setUserPost,
  setLoadingUserPostTrue,
} = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: {
        token,
        user: { pk },
      },
    } = await api.login(form);

    if (pk && token) {
      dispatch(logIn({ token, pk }));
    }
  } catch (e) {
    alert(e);
  }
};

export const getMe = () => async (dispatch, getState) => {
  const {
    usersReducer: { pk },
  } = getState();
  try {
    const { data } = await api.getUser(pk);

    dispatch(me({ user: data }));
  } catch (e) {
    console.warn(e);
  }
};

export const toggleFollow = (user) => async (dispatch, getState) => {
  const {
    usersReducer: { pk, token },
  } = getState();
  const userId = user.id;
  const isFollower = user.is_follower;

  try {
    const {
      data: { id },
    } = await api.follow(userId, token);
    const { data } = await api.getUser(id);

    dispatch(setFollow({ data }));
  } catch (e) {
    console.warn(e);
  }
};

export const getFollowee = () => async (dispatch, getState) => {
  const {
    usersReducer: {
      token,
      user: { id },
    },
  } = getState();

  const myPk = id;
  try {
    const {
      data: { followee },
    } = await api.myFollowee(myPk, token);
    dispatch(setFollowee(followee));
  } catch (e) {
    console.warn(e);
  }
};

export const getFollower = () => async (dispatch, getState) => {
  const {
    usersReducer: {
      token,
      user: { id },
    },
  } = getState();

  const myPk = id;
  try {
    const { data } = await api.myFollower(myPk, token);
    const follower = data.map((d) => d.follower);
    dispatch(setFollower(follower));
  } catch (e) {
    console.warn(e);
  }
};

export const goConversation = (userId) => async (dispatch, getState) => {
  const {
    usersReducer: { pk, token },
  } = getState();

  const meId = pk;

  // console.log(userId);
  try {
    const {
      data: { id, messages, participants },
    } = await api.goConversation(userId, meId, token);

    dispatch(setConversations({ id, messages, participants }));
  } catch (e) {
    console.warn(e);
  }
};

export const sendMessage = (conversationId, comment, token) => async (
  dispatch,
  getState
) => {
  const form = {
    message: comment,
    conversation: conversationId,
  };
  try {
    const { data } = await api.sendMessage(conversationId, form, token);
    dispatch(setConversation(data));
  } catch (e) {
    console.warn(e);
  }
};

export const getMessage = (page) => async (dispatch, getState) => {
  const {
    usersReducer: { token, conversations },
  } = getState();

  const conversationId = conversations.id;
  try {
    const { data } = await api.getMessage(conversationId, token, page);
    dispatch(setMessage({ data, page }));
  } catch (e) {
    console.warn(e);
  }
};

export const getMyPost = (pk) => async (dispatch, getState) => {
  try {
    dispatch(setLoadingMyPostTrue());
    const { data } = await api.myPost(pk);

    dispatch(setMyPost(data));
  } catch (e) {
    console.warn(e);
  }
};

export const getUserPost = (userId) => async (dispatch, getState) => {
  try {
    dispatch(setLoadingUserPostTrue());
    const { data } = await api.myPost(userId);

    dispatch(setUserPost(data));
  } catch (e) {
    console.warn(e);
  }
};

export const changeAvatar = (data) => async (dispatch, getState) => {
  const userData = {
    avatar: `http://127.0.0.1:8000${data.avatar}`,
  };
  dispatch(setMyAvatar(userData));
};

export const editUserInfo = (userId, form, token) => async (
  dispatch,
  getState
) => {
  try {
    const {
      data: { bio, email },
    } = await api.updateUser(userId, form, token);

    dispatch(setMyInfo({ bio, email }));
  } catch (e) {
    console.warn(e);
  } finally {
    alert("변경완료");
  }
};

export default userSlice.reducer;

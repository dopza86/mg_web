import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: [],
    followers: [],
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
    setFollow(state, action) {
      const { payload } = action;

      const follower = state.followers.find(
        (follower) => follower.id === payload.id
      );

      if (follower === undefined || follower) {
        if (payload.is_follower === false) {
          state.followers = [payload, ...state.followers];
          const follower = state.followers.find(
            (follower) => follower.id === payload.id
          );
          follower.is_follower = true;
          alert("팔로우!");
        } else if (payload.is_follower === true) {
          state.followers = [payload, ...state.followers];
          const follower = state.followers.find(
            (follower) => follower.id === payload.id
          );
          follower.is_follower = false;
          state.followers = state.followers.filter(
            (follower) => follower.id !== payload.id
          );
          alert("언팔로우!");
        }
      }
    },
  },
});

export const { logIn, logOut, me, setFollow } = userSlice.actions;

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
    const {
      data: { is_follower },
    } = await api.getUser(id);

    dispatch(setFollow({ id, is_follower }));
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;

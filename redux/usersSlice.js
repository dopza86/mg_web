import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: [],
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
  },
});

export const { logIn, logOut, me } = userSlice.actions;

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
    const { data } = await api.isMe(pk);
    dispatch(me({ user: data }));
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;

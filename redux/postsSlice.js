import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    explore: {
      page: 1,
      posts: [],
    },
    photos: [],
  },
  reducers: {
    setExplorePosts(state, action) {
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.posts = payload.posts;
        state.explore.page = 1;
      } else {
        state.explore.posts = [...state.explore.posts, ...payload.posts];
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
  },
});

export const { setExplorePosts, increasePage, getPhotos } = postsSlice.actions;

export const getPosts = (page) => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();

  try {
    const {
      data: { results },
    } = await api.posts(page, token);

    dispatch(
      setExplorePosts({
        posts: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default postsSlice.reducer;

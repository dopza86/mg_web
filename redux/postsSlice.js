import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    explore: {
      page: 1,
      posts: [],
    },
    likes: [],
    comments: [],
    commentsPage: 1,
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
    setLikes(state, action) {
      if (action.payload.likesPage === 1) {
        state.likes = action.payload.likes.results;
        state.likesPage = 1;
      } else {
        state.likes = [...state.likes, ...action.payload.likes.results];
      }
    },
    increaseLikesPage(state, action) {
      state.likesPage += 1;
    },
    setLike(state, action) {
      const {
        payload: { postId },
      } = action;
      const post = state.explore.posts.find((post) => post.id === postId);
      if (post) {
        if (post.is_liked) {
          post.is_liked = false;
          state.likes = state.likes.filter((post) => post.id !== postId);
          alert("좋아요를 취소했습니다");
        } else {
          post.is_liked = true;
          state.likes = [post, ...state.likes];
          alert("좋아요!");
        }
      }
    },
    increaseCommentsPage(state, action) {
      state.commentsPage += 1;
    },
    setComments(state, action) {
      const { payload } = action;

      if (payload.commentsPage === 1) {
        state.comments = payload.data;
        state.commentsPage = 1;
      } else {
        state.comments = [...state.Comments, ...payload.data];
      }
    },
    createComment(state, action) {
      const {
        payload: { data },
      } = action;

      state.comments = [data, ...state.comments];
    },
  },
});

export const {
  setExplorePosts,
  increasePage,
  setLikes,
  setLike,
  setComments,
  createComment,
  increaseCommentsPage,
} = postsSlice.actions;

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

export const toggleLike = (postId) => async (dispatch, getState) => {
  const {
    usersReducer: { pk, token },
  } = getState();
  dispatch(setLike({ postId }));

  try {
    await api.handleLike(postId, pk, token);
  } catch (e) {
    console.warn(e);
  }
};

export const getComment = (postId, commentsPage) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await api.seeComment(postId, commentsPage);
    dispatch(setComments({ data, commentsPage }));
  } catch (e) {
    console.warn(e);
  }
};

const isFormValid = (comment) => {
  if (comment === "") {
    alert("댓글을 입력 해주세요");
    return false;
  }

  return true;
};

export const addComment = (postId, comment) => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();

  if (!isFormValid(comment)) {
    return;
  }

  const form = {
    text: comment,
  };

  try {
    const { data, status } = await api.goComment(postId, form, token);

    if (status === 201) {
      alert("댓글이 등록되었습니다");
      dispatch(createComment({ postId, data }));
      setComments("");
    }
  } catch (e) {
    console.warn(e);
  }
};

export default postsSlice.reducer;

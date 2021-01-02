import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import postsReducer from "./postsSlice";

export default combineReducers({
  usersReducer,
  postsReducer,
});

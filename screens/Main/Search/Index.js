import { connect } from "react-redux";
import SearchContainer from "./SearchContainer";
import {
  getPosts,
  increasePage,
  clearFilterPost,
} from "../../../redux/postsSlice";

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (page) => dispatch(getPosts(page)),
    increasePage: () => dispatch(increasePage()),
    clearFilterPost: () => dispatch(clearFilterPost()),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    filtered: state.postsReducer.filtered,
    likes: state.postsReducer.likes,
    followers: state.usersReducer.followers,
    loading: state.postsReducer.loading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

import { connect } from "react-redux";
import SearchContainer from "./SearchContainer";

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (page) => dispatch(getPosts(page)),
    increasePage: () => dispatch(increasePage()),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    filtered: state.postsReducer.filtered,
    likes: state.postsReducer.likes,
    followers: state.usersReducer.followers,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

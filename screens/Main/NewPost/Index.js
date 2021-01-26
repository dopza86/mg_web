import NewPostContainer from "./NewPostContainer";
import { connect } from "react-redux";
import { writePhoto, CleanPhoto, writePost } from "../../../redux/postsSlice";

function mapDispatchToProps(dispatch) {
  return {
    writePhoto: (data) => dispatch(writePhoto(data)),
    CleanPhoto: () => dispatch(CleanPhoto()),
    writePost: (tags, caption, location) =>
      dispatch(writePost(tags, caption, location)),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    addPhoto: state.postsReducer.addPhoto,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostContainer);

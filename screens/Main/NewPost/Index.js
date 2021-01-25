import NewPostContainer from "./NewPostContainer";
import { connect } from "react-redux";
import { writePost } from "../../../redux/postsSlice";

function mapDispatchToProps(dispatch) {
  return {
    writePost: (data) => dispatch(writePost(data)),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    writePhoto: state.postsReducer.writePhoto,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostContainer);

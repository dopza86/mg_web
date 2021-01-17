import MessageDetailContainer from "./MessageDetailContainer";
import { connect } from "react-redux";
import { getMe, goConversation } from "../../../redux/usersSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
    goConversation: () => dispatch(goConversation()),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    conversations: state.usersReducer.conversations,
    me: state.usersReducer.user,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDetailContainer);

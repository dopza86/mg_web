import MessageDetailContainer from "./MessageDetailContainer";
import { connect } from "react-redux";
import { getMe, goConversation, getMessage } from "../../../redux/usersSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
    goConversation: () => dispatch(goConversation()),
    getMessage: (page) => dispatch(getMessage(page)),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    conversations: state.usersReducer.conversations,
    me: state.usersReducer.user,
    page: state.usersReducer.page,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDetailContainer);

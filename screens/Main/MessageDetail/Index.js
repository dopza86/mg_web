import MessageDetailContainer from "./MessageDetailContainer";
import { connect } from "react-redux";
import {
  getMe,
  goConversation,
  getMessage,
  increasePage,
} from "../../../redux/usersSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
    goConversation: () => dispatch(goConversation()),
    getMessage: (page) => dispatch(getMessage(page)),
    increasePage: () => dispatch(increasePage()),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    conversations: state.usersReducer.conversations,
    me: state.usersReducer.user,
    page: state.usersReducer.page,
    messages: state.usersReducer.messages,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDetailContainer);

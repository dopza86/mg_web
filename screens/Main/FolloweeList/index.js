import FolloweeListContainer from "./FolloweeListContainer";
import { connect } from "react-redux";

import { getMe } from "../../../redux/usersSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
  };
}

function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    myFollowers: state.usersReducer.followers,
    user: state.usersReducer.user,
    loading: state.usersReducer.loading,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolloweeListContainer);

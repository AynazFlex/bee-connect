import { connect } from "react-redux";
import Users from "./Users";
import { FollowUnfollowActionCreat } from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
    users: state.usersPage
});

const mapDispatchToProps = (dispatch) => ({
    followed: (userId) => { dispatch(FollowUnfollowActionCreat(userId)) },
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
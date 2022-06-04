import React, { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsers,
  changeUsers,
  setUnfollow,
  setFollow,
} from "../../redux/usersReducer";
import Preloader from "../Other/Preloader";
import { compose } from "redux";

const UsersContainer = (props) => {

  useEffect(() => {
    props.getUsers(props.pageSize);
  }, []);

  //console.log('user render');

  return props.isFetch ? (
    <Preloader />
  ) : (
    <Users
      users={props.users}
      activePage={props.activePage}
      followed={props.followed}
      changePage={props.changeUsers}
      setFollow={props.setFollow}
      setUnfollow={props.setUnfollow}
      followingInProgress={props.followingInProgress}
      pageSize={props.pageSize}
      totalCount={props.totalCount}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    activePage: state.usersPage.activePage,
    isFetch: state.usersPage.isFetch,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsers,
    changeUsers,
    setUnfollow,
    setFollow,
  })
)(UsersContainer);

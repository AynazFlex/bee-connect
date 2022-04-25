import React, { useState, useEffect } from "react";
import * as axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  FollowUnfollowActionCreat,
  SetUsersActionCreat,
  SetTotalCountActionCreat,
  SetActiveActionCreat,
  toggleLoadingActionCreat,
} from "../../redux/usersReducer";
import Preloader from "../Other/Preloader";

const UsersContainer = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    props.isFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=1&count=${props.users.pageSize}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
        props.setTotalCount(response.data.totalCount);
        props.setActive(1);
        props.isFetching(false);
      });
  }, []);

  const pagination = () => {
    const len = Math.ceil(props.users.totalCount / props.users.pageSize);
    const pages = [];
    for (let i = 1; i <= len; i++) {
      pages.push(i);
    }
    return pages;
  };

  const scrolling = (direction) => {
    switch (direction) {
      case "left":
        scroll === 0 || setScroll(scroll + 200);
        return;
      case "right":
        setScroll(scroll - 200);
        return;
      default:
        return;
    }
  };

  const changePage = (page) => {
    props.isFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.users.pageSize}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
        props.isFetching(false);
      });
    props.setActive(page);
  };

  return props.users.isFetch ? (
    <Preloader />
  ) : (
    <Users
      users={props.users.users}
      activePage={props.users.activePage}
      followed={props.followed}
      changePage={changePage}
      scroll={scroll}
      scrolling={scrolling}
      pagination={pagination}
    />
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage,
});

const mapDispatchToProps = (dispatch) => ({
  followed: (userId) => {
    dispatch(FollowUnfollowActionCreat(userId));
  },
  setUsers: (users) => {
    dispatch(SetUsersActionCreat(users));
  },
  setTotalCount: (totalCount) => {
    dispatch(SetTotalCountActionCreat(totalCount));
  },
  setActive: (page) => {
    dispatch(SetActiveActionCreat(page));
  },
  isFetching: (isFetching) => {
    dispatch(toggleLoadingActionCreat(isFetching));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

import React, { useState, useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsers,
  changeUsers,
  setUnfollow,
  setFollow,
} from "../../redux/usersReducer";
import Preloader from "../Other/Preloader";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const UsersContainer = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    props.getUsers(props.users.pageSize);
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
    props.changeUsers(page, props.users.pageSize);
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
      setFollow={props.setFollow}
      setUnfollow={props.setUnfollow}
      followingInProgress={props.users.followingInProgress}
    />
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage,
});

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, {
    getUsers,
    changeUsers,
    setUnfollow,
    setFollow,
  })
)(UsersContainer);

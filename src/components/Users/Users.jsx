import React from "react";
import s from "./Users.module.css";
import User from "./User";
import Pagination from "./Pagination";

const Users = (props) => (
  <div className={s.users}>
    {props.users.map((user) => (
      <User
        key={user.id}
        user={user}
        setUnfollow={props.setUnfollow}
        setFollow={props.setFollow}
        followingInProgress={props.followingInProgress}
      />
    ))}
    <Pagination
      scrolling={props.scrolling}
      scroll={props.scroll}
      pagination={props.pagination}
      changePage={props.changePage}
      activePage={props.activePage}
    />
  </div>
);

export default Users;

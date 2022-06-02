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
        followingInProgress={props.followingInProgress.includes(user.id)}
      />
    ))}
    <Pagination
      changePage={props.changePage}
      activePage={props.activePage}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
    />
  </div>
);

export default Users;

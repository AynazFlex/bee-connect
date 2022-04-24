import React from "react";
import s from "./Users.module.css";

const Users = (props) => (
  <div className={s.users}>
    {props.users.map((user) => (
      <div className={s.user} key={user.id}>
        <div className={s.data}>
          <img className={s.avatar} src={user.avatar} alt="ava" />
          <div className={s.info}>
            <h3 className={s.name}>{user.name}</h3>
            <p className={s.locations}>{user.locations}</p>
            <p className={s.birthday}>{user.birthday}</p>
          </div>
        </div>
        <button className={s.followed} onClick={() => props.followed(user.id)}>
          {user.followed ? "Удалить из друзей" : "Добавить в друзья"}
        </button>
      </div>
    ))}
    <div className={s.paginationPanel}>
      <div
        onClick={() => props.scrolling("left")}
        className={s.paginationItems}
      >
        &laquo;
      </div>
      <div className={s.paginationPages}>
        <div
          className={s.paginationPagesItem}
          style={{ marginLeft: props.scroll + "px" }}
        >
          {props.pagination().map((p) => (
            <div
              onClick={() => props.changePage(p)}
              key={p}
              className={
                props.activePage === p
                  ? `${s.paginationItems} ${s.active}`
                  : s.paginationItems
              }
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => props.scrolling("right")}
        className={s.paginationItems}
      >
        &raquo;
      </div>
    </div>
  </div>
);

export default Users;

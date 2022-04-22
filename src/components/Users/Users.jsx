import React, { useEffect } from "react";
import s from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {

  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items);
    })
  }, []);

  return (
    <div className={s.users}>
      {props.users.users.map((user) => (
        <div className={s.user} key={user.id}>
          <div className={s.data}>
            <img className={s.avatar} src={user.avatar} alt="ava" />
            <div className={s.info}>
              <h3 className={s.name}>{user.name}</h3>
              <p className={s.locations}>{user.locations}</p>
              <p className={s.birthday}>{user.birthday}</p>
            </div>
          </div>
          <button
            className={s.followed}
            onClick={() => props.followed(user.id)}
          >
            {user.followed ? "Удалить из друзей" : "Добавить в друзья"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;

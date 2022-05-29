import React, { memo } from "react";
import s from "./Users.module.css";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.data}>
        <Link to={`/profile/${props.user.id}`}>
          <img className={s.avatar} src={props.user.avatar} alt="ava" />
        </Link>
        <div className={s.info}>
          <Link to={`/profile/${props.user.id}`} className={s.link}>
            <h3 className={s.name}>{props.user.name}</h3>
          </Link>
          <p className={s.locations}>{props.user.locations}</p>
          <p className={s.birthday}>{props.user.birthday}</p>
        </div>
      </div>
      {props.followingInProgress.includes(props.user.id) ? (
        <div className={s.followed}>Progress</div>
      ) : (
        <button
          className={s.followed}
          onClick={() => {
            props.user.followed
              ? props.setUnfollow(props.user.id)
              : props.setFollow(props.user.id);
          }}
        >
          {props.user.followed ? "Удалить из друзей" : "Добавить в друзья"}
        </button>
      )}
    </div>
  );
};

export default memo(User);

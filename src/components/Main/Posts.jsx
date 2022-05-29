import React, { memo } from "react";
import s from "./Posts.module.css";
import Hr from "../Other/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Posts = (props) => {
  const date = new Date(props.post.date);

  return (
    <div className={s.posts}>
      <div className={s.head}>
        <div>
          <div className={s.title}>
            <img className={s.ava} src={props.post.ava} alt="ava" />
            <h3>{props.post.profileName}</h3>
          </div>
        </div>
        <div>
          <span className={s.date}>
            {date.toLocaleTimeString().slice(0, 5)} {date.toLocaleDateString()}
          </span>
          <FontAwesomeIcon
            onClick={() => props.deletePost(props.post.date)}
            icon={faTrash}
            className={s.icon}
          />
        </div>
      </div>
      <Hr />
      <div className={s.body}>{props.post.body}</div>
    </div>
  );
};

export default memo(Posts);

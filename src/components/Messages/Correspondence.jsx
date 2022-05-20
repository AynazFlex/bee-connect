import React from "react";
import s from "./Messagepage.module.css";

const Correspondence = (props) => {
  const date = new Date(props.date);

  return (
    <div className={s.item}>
      <img src={props.ava} className={s.image} />
      <div>
        <div className={s.name}>
          {props.name}
          <span className={s.timeBlock}>
            {date.toLocaleTimeString().slice(0, 5)} {date.toLocaleDateString()}
          </span>
        </div>
        <p className={s.message}>{props.body}</p>
      </div>
    </div>
  );
};

export default Correspondence;

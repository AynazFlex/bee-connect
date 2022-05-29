import React, { memo } from "react";
import s from "./Messages.module.css";

const Message = (props) => {
  return (
    <div
      i={props.i}
      className={s.item}
      onClick={(e) => {
        const index = e.currentTarget.getAttribute("i");
        props.openMessage(index);
      }}
    >
      <img src={props.state.ava} className={s.image} />
      <div>
        <h4 className={s.title}>{props.state.name}</h4>
        <p className={s.lastmessage}>{props.state.lastmessage}</p>
      </div>
    </div>
  );
};

export default memo(Message);

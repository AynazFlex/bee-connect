import React from "react";
import s from "./Messages.module.css";

const Message = props => {

    const openMessage = (e) => {
      const index = e.currentTarget.getAttribute('i');
      props.openMessage(index);
    }

    return (
        <div i={props.i} className={s.item} onClick={openMessage}>
          <img src={props.state.ava} className={s.image}/>
          <div>
            <h4 className={s.title}>{props.state.name}</h4>
            <p className={s.lastmessage}>{props.state.lastmessage}</p>
          </div>
        </div>
    )
}



export default Message
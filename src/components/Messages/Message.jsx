import React from "react";
import s from "./Messages.module.css";
import { openMessageActionCreate } from "../../redux/messageReducer";

const Message = props => {

    const openMessage = (e) => {
      const index = e.currentTarget.getAttribute('i');
      props.dispatch(openMessageActionCreate(index));
    }

    return (
        <div i={props.i} className={s.item} onClick={openMessage}>
          <img src={props.state.title.ava} className={s.image}/>
          <div>
            <h4 className={s.title}>{props.state.title.name}</h4>
            <p className={s.lastmessage}>{props.state.title.lastmessage}</p>
          </div>
        </div>
    )
}



export default Message
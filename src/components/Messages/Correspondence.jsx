import React from "react";
import s from "./Messagepage.module.css";

const Correspondence = props => {
    return (
        <div className={s.item}>
          <img src={props.state.identefication === 'me' ? props.avatar : props.avatar1} className={s.image}/>
          <div>
            <h4 className={s.name}>{props.state.identefication === 'me' ? props.me : props.name}</h4>
            <p className={s.message}>{props.state.body}</p>
          </div>
        </div>
    )
}

export default Correspondence
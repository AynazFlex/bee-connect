import React from "react";
import s from "./Messagepage.module.css";

const Correspondence = props => {
    return (
        <div className={s.item}>
          <img src={props.state.ava} className={s.image}/>
          <div>
            <h4 className={s.name}>{props.state.name}</h4>
            <p className={s.message}>{props.state.body}</p>
          </div>
        </div>
    )
}

export default Correspondence
import React from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";

function Newpost(props) {

  const click = () => {
    props.dispatch({ type: 'ADD-POST' })
  }

  const change = event => {
    const action = {
      type: 'CHANGE_ENTRY_FIELD',
      newText: event.target.value,
    }
    props.dispatch(action);
  }

  return (
    <>
      <div className={s.post}>
        <textarea
          onChange={change}
          placeholder="Что у вас нового?"
          className={s.input}
          value={props.textOfPost}
        />
        <Button callback={click} text="Опубликовать" />
      </div>
    </>
  );
}

export default Newpost;

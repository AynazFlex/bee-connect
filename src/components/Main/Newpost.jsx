import React from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";

function Newpost(props) {

  const click = () => {
    props.addPost();
  }

  const change = event => {
    props.changeEntryField(event.target.value);
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

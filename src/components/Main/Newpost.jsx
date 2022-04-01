import React from "react";
import { useState } from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";

function Newpost(props) {

  const [text, setText] = useState(props.text);

  const click = () => {
    alert(text);
    props.addPost(text);
  }

  const change = (e) => {
    setText(e.target.textContent)
  }

  return (
    <>
      <div className={s.post}>
        <div
          onBlur={change}
          tabIndex="0"
          placeholder="Что у вас нового?"
          contentEditable="true"
          className={s.input}
        >{text}</div>
        <Button callback={click} text="Опубликовать" />
      </div>
    </>
  );
}

export default Newpost;

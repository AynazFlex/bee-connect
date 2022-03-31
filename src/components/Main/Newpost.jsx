import React from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";

function Newpost(props) {

  const textRef = React.createRef();

  const click = () => {
    alert(textRef.current.textContent);
    props.addPost(textRef.current.textContent);
  }

  return (
    <>
      <div className={s.post}>
        <div
          ref={textRef}
          tabindex="0"
          placeholder="Что у вас нового?"
          contenteditable="true"
          className={s.input}
        ></div>
        <Button callback={click} text="Опубликовать" />
      </div>
    </>
  );
}

export default Newpost;

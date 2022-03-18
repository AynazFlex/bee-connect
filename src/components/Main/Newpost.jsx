import { useState } from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";

function Newpost() {
  let posts = [];

  const [text, setText] = useState("");

  const click = () => {
    console.log(text);
  };

  return (
    <>
      <div className={s.post}>
        <div
          tabindex="0"
          onBlur={(e) => setText(e.target.innerHTML)}
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

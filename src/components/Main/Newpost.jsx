import React from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";

function Newpost(props) {

  return (
    <>
      <div className={s.post}>
        <textarea
          onChange={(e) => {
            const text = e.target.value;
            props.changeText(text);
          }}
          placeholder="Что у вас нового?"
          className={s.input}
          value={props.textOfPost}
        />
        <Button callback={props.addPost} text="Опубликовать" />
      </div>
    </>
  );
}

export default Newpost;

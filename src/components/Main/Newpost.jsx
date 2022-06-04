<<<<<<< HEAD
import React from "react";
import { useState } from "react";
=======
import React, { memo } from "react";
>>>>>>> newredux
import s from "./Newpost.module.css";
import Button from "../Other/Button";
import { useForm } from "react-hook-form";

function Newpost(props) {
  const { register, handleSubmit, reset } = useForm();

<<<<<<< HEAD
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
=======
  const submit = (data) => {
    props.addPost(data.post);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={s.post}>
      <textarea
        {...register("post", { required: true })}
        placeholder="Что у вас нового?"
        className={s.input}
      />
      <Button text="Опубликовать" />
    </form>
>>>>>>> newredux
  );
}

export default memo(Newpost);

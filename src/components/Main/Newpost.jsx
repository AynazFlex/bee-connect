import React from "react";
import s from "./Newpost.module.css";
import Button from "../Other/Button";
import { useForm } from "react-hook-form";

function Newpost(props) {
  const { register, handleSubmit, reset } = useForm();

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
  );
}

export default Newpost;

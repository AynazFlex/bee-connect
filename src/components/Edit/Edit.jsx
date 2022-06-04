import React from "react";
import s from "./Edit.module.css";
import Button from "../Other/Button";
import Hr from "../Other/Hr";
import { useForm } from "react-hook-form"; 

const Edit = (props) => {

  const {register, handleSubmit, reset} = useForm();
    
  const submit = (data) => {
    props.commitForm(data);
    reset();
  };

  //console.log('edit render');

  return (
    <div className={s.formBlock}>
      <form onSubmit={handleSubmit(submit)}>
        <label className={s.item}>
          {" "}
          Имя Фамилия:
          <input
            {...register("fullname")}
            className={s.input}
            placeholder="Имя Фамилия"
          />
        </label>
        <label className={s.item}>
          {" "}
          Адрес:
          <input
            {...register("address")}
            className={s.input}
            type="text"
            placeholder="Адрес"
          />
        </label>
        <label className={s.item}>
          {" "}
          День рождения:
          <input
            {...register("birthday")}
            className={s.input}
            type="text"
            placeholder="День рождения"
          />
        </label>
        <label className={s.item}>
          {" "}
          Работа:
          <input
            {...register("job")}
            className={s.input}
            type="text"
            placeholder="Работа"
          />
        </label>
        <Hr />
        <Button
          classname={s.modify}
          text="Сохранить"
        />
      </form>
    </div>
  );
};

export default Edit;

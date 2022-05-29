import React, { useEffect } from "react";
import Correspondence from "./Correspondence";
import s from "./Messagepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const MessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    props.sendMessage(data.message);
    reset();
  };

  return (
    <form className={s.writer} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("message", {
          required: true,
        })}
        className={s.newmess}
        placeholder="Напишите сообщение..."
      />
      <button className={s.send}>
        <FontAwesomeIcon icon={faPaperPlane} className={s.icon} />
      </button>
    </form>
  );
};

const Messagepage = (props) => {
  useEffect(() => () => {
      props.closeMessage();
  }, []);

  return (
    <div className={s.page}>
      <h3 className={s.title}>{props.title}</h3>
      <div className={s.correspondence}>
        {props.dialogs.map((item) => {
          let ava;
          let name;
          if (item.identefication === "me") {
            ava = props.avatar;
            name = props.shortName;
          } else {
            ava = props.avatar1;
            name = props.name;
          }
          return (
            <Correspondence
              ava={ava}
              name={name}
              key={item.date}
              date={item.date}
              body={item.body}
            />
          );
        })}
      </div>
      <MessageForm sendMessage={props.sendMessage} />
      <button onClick={props.closeMessage} className={s.back}>
        <FontAwesomeIcon icon={faAngleLeft} className={s.backicon} />
        Назад
      </button>
    </div>
  );
};

export default Messagepage;

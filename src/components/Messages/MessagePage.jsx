import React from "react";
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

class Messagepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.closeMessage();
  }

  render() {
    return (
      <div className={s.page}>
        <h3 className={s.title}>{this.props.title}</h3>
        <div className={s.correspondence}>
          {this.props.dialogs.map((item, index) => {
            let ava;
            let name;
            if (item.identefication === "me") {
              ava = this.props.avatar;
              name = this.props.shortName;
            } else {
              ava = this.props.avatar1;
              name = this.props.name;
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
        <MessageForm sendMessage={this.props.sendMessage} />
        <button onClick={this.props.closeMessage} className={s.back}>
          <FontAwesomeIcon icon={faAngleLeft} className={s.backicon} />
          Назад
        </button>
      </div>
    );
  }
}

export default Messagepage;

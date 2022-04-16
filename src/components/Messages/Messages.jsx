import React from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import Messagepage from "./MessagePage";

const Messages = (props) => {

  const i = props.state.index;

  return (
    <>
      {props.state.isOpen ? (
        <Messagepage
          newMessage={props.state.newMessage}
          dialogs={props.state.messages[i].dialogs}
          shortName={props.shortName}
          avatar={props.avatar}
          avatar1={props.state.messages[i].title.ava}
          name={props.state.messages[i].title.shortName}
          title={props.state.messages[i].title.name}
          newMessageInput={props.newMessageInput}
          sendMessage={props.sendMessage}
          closeMessage={props.closeMessage}
        />
      ) : (
        <div className={s.messages}>
          {props.state.messages.map((item, index) => (
            <Message
              i={index}
              key={index}
              state={item.title}
              openMessage={props.openMessage}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;

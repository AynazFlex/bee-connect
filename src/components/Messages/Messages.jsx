import React from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import Messagepage from "./MessagePage";
import { newMessageActionCreate, sendMessageActionCreate, closeMessageActionCreate, openMessageActionCreate } from "../../redux/dataReducer";

const Messages = (props) => {

  const i = props.state.index;

  const newMessage = (text) => {
    props.dispatch(newMessageActionCreate(text));
  }

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreate());
  }

  const closeMessage = () => {
    props.dispatch(closeMessageActionCreate());
  }

  const openMessage = (index) => {
    props.dispatch(openMessageActionCreate(index));
  }

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
          newMessageInput={newMessage}
          sendMessage={sendMessage}
          closeMessage={closeMessage}
        />
      ) : (
        <div className={s.messages}>
          {props.state.messages.map((item, index) => (
            <Message
              i={index}
              key={index}
              state={item.title}
              openMessage={openMessage}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;

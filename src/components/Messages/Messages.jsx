import React from "react";
import s from "./Messages.module.css";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.messages}>
        <h1>Сообщения</h1>
      </div>
    );
  }
}

export default Messages;
import React from "react";
import Correspondence from "./Correspondence";
import s from "./Messagepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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
                key={index}
                body={item.body}
              />
            );
          })}
        </div>
        <div className={s.writer}>
          <textarea
            onChange={(e) => {
              const mess = e.target.value;
              this.props.newMessageInput(mess);
            }}
            className={s.newmess}
            placeholder="Напишите сообщение..."
            value={this.props.newMessage}
          />
          <button className={s.send} onClick={this.props.sendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} className={s.icon} />
          </button>
        </div>
        <button onClick={this.props.closeMessage} className={s.back}>
          <FontAwesomeIcon icon={faAngleLeft} className={s.backicon} />
          Назад
        </button>
      </div>
    );
  }
}

export default Messagepage;

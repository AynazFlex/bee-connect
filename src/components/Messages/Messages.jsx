import React from "react";
import s from "./Messages.module.css";
import Message from "./Message"
import Messagepage from "./MessagePage";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.state.isOpen ? 
          <Messagepage 
            newMessage={this.props.state.newMessage}
            dialogs={this.props.state.messages[this.props.state.index].dialogs}
            name={this.props.state.messages[this.props.state.index].title.name}
            dispatch={this.props.dispatch}
          /> : 
          <div className={s.messages}>
            {this.props.state.messages.map((item, index) => <Message 
              i={index} 
              key={index} 
              state={item}
              dispatch={this.props.dispatch}
            />)}
          </div>
        }
      </>
    );
  }
}

export default Messages;
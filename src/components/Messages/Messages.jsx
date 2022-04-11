import React from "react";
import s from "./Messages.module.css";
import Message from "./Message"
import Messagepage from "./MessagePage";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <>
        {this.props.state.isOpen ? 
          <Messagepage 
            newMessage={this.props.state.newMessage}
            dialogs={this.props.state.messages[this.props.state.index].dialogs}
            shortName={this.props.shortName}
            avatar={this.props.avatar}
            avatar1={this.props.state.messages[this.props.state.index].title.ava}
            name={this.props.state.messages[this.props.state.index].title.shortName}
            title={this.props.state.messages[this.props.state.index].title.name}
            dispatch={this.props.dispatch}
          /> : 
          <div className={s.messages}>
            {this.props.state.messages.map((item, index) => <Message 
              i={index} 
              key={index} 
              state={item.title}
              dispatch={this.props.dispatch}
            />)}
          </div>
        }
      </>
    );
  }
}

export default Messages;
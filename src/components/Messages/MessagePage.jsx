import React from "react";
import Correspondence from "./Correspondence";
import s from "./Messagepage.module.css";
import { newMessageActionCreate, sendMessageActionCreate, closeMessageActionCreate } from "../../redux/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faAngleLeft} from "@fortawesome/free-solid-svg-icons";


class Messagepage extends React.Component {
    constructor(props) {
        super(props);
        this.newMessage = this.newMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
    }

    newMessage(e) {
        this.props.dispatch(newMessageActionCreate(e.target.value));
    };

    sendMessage() {
        this.props.dispatch(sendMessageActionCreate());
    };

    closeMessage() {
        this.props.dispatch(closeMessageActionCreate());
    }

    componentWillUnmount() {
        this.closeMessage();
    }

    render() {
        return (
            <div className={s.page}>
                <h3 className={s.title}>{this.props.name}</h3>
                <div className={s.correspondence}>
                    {this.props.dialogs.map((item, index) => 
                        <Correspondence 
                            key={index}
                            state={item}
                        />)}
                </div>
                <div className={s.writer}>
                    <textarea
                        onChange={this.newMessage}
                        className={s.newmess} 
                        placeholder='Напишите сообщение...'
                        value={this.props.newMessage}
                     />
                    <button className={s.send} onClick={this.sendMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} className={s.icon} />
                    </button>
                </div>
                <button onClick={this.closeMessage} className={s.back}>
                    <FontAwesomeIcon icon={faAngleLeft} className={s.backicon} />
                    Назад
                </button>
            </div>
        )
    }
}

export default Messagepage;
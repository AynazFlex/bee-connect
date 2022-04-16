import { connect } from "react-redux";
import { newMessageActionCreate, sendMessageActionCreate, closeMessageActionCreate, openMessageActionCreate } from "../../redux/dataReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => ({
    avatar: state.data.avatar,
    shortName: state.data.shortName,
    state: state.data.messagesPage,
});

const mapDispatchToProps = (dispatch) => ({
    newMessage: (text) => dispatch(newMessageActionCreate(text)),
    
    sendMessage: () => dispatch(sendMessageActionCreate()),
    
    closeMessage: () => dispatch(closeMessageActionCreate()),
    
    openMessage: (index) => dispatch(openMessageActionCreate(index)),
});


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default DialogsContainer;
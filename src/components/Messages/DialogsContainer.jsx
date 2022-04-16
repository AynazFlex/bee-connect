import { connect } from "react-redux";
import { newMessageActionCreate, sendMessageActionCreate, closeMessageActionCreate, openMessageActionCreate } from "../../redux/dataReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => ({
    avatar: state.data.avatar,
    shortName: state.data.shortName,
    state: state.data.messagesPage,
});

const mapDispatchToProps = (dispatch) => ({
    newMessageInput: (e) => {
        const mess = e.target.value;
        dispatch(newMessageActionCreate(mess));
    },
    
    sendMessage: () => dispatch(sendMessageActionCreate()),
    
    closeMessage: () => dispatch(closeMessageActionCreate()),
    
    openMessage: (e) => {
        const index = e.currentTarget.getAttribute('i');
        dispatch(openMessageActionCreate(index))
    }
});


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default DialogsContainer;
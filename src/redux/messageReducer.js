const OPEN_MESSAGE = 'OPEN_MESSAGE';
const NEW_MESSAGE = 'NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';
const CLOSE_MESSAGE = 'CLOSE_MESSAGE';


export const openMessageActionCreate = (index) => ({ 
    type: OPEN_MESSAGE,
    index: index,
});
  
export const closeMessageActionCreate = () => ({
    type: CLOSE_MESSAGE,
});
  
export const newMessageActionCreate = (body) => ({
    type: NEW_MESSAGE,
    body: body,
});
  
export const sendMessageActionCreate = () => ({
    type: SEND_MESSAGE,
});


const messageReducer = (state, action) => {
    switch (action.type) {
        case OPEN_MESSAGE: {
            state.messagesPage.isOpen = true;
            state.messagesPage.index = action.index;
            return state.messagesPage;
        }
        case NEW_MESSAGE: 
            state.messagesPage.newMessage = action.body;
            return state.messagesPage;
        case SEND_MESSAGE: {
            if(state.messagesPage.newMessage === '') return state.messagesPage;
            const index = state.messagesPage.index;
            const text = state.messagesPage.newMessage;
            const message = {
                name: state.shortName,
                ava: state.avatar,
                body: text
            };
            state.messagesPage.messages[index].dialogs.push(message);
            const lastmessage = state.messagesPage.messages[index].dialogs.slice(-1)[0].body;
            state.messagesPage.messages[index].title.lastmessage = lastmessage;
            state.messagesPage.newMessage = '';
            return state.messagesPage;
        }
        case CLOSE_MESSAGE: {
            state.messagesPage.isOpen = false;
            state.messagesPage.index = '';
            return state.messagesPage;
        }
        default: 
            return state.messagesPage;
    }
}


export default messageReducer;
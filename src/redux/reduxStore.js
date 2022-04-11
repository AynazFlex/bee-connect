import { createStore, combineReducers } from "redux";
import editReduser from "./editReducer";
import mainReducer from "./mainReducer";
import messageReducer from "./messageReducer";

const reducers = combineReducers({
    editPage: editReduser,
    messagesPage: messageReducer,
    mainPage: mainReducer,
})
const store = createStore(reducers);


export default store;
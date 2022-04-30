import { createStore, combineReducers } from "redux";
import dataReducer from "./dataReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    data: dataReducer,
    usersPage: usersReducer,
    profile: profileReducer,
    auth: authReducer,
})


const store = createStore(reducers);

window.store = store;


export default store;
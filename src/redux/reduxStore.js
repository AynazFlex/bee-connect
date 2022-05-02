import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from "./dataReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    data: dataReducer,
    usersPage: usersReducer,
    profile: profileReducer,
    auth: authReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;
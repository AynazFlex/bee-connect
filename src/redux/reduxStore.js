import { createStore, combineReducers } from "redux";
import dataReducer from "./dataReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    data: dataReducer,
    usersPage: usersReducer,
    profile: profileReducer,
})


const store = createStore(reducers);


export default store;